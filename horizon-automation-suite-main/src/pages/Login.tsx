import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Eye, EyeOff, Loader2, Mail, Phone, Smartphone, MessageSquare, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import UrbaniumLogo from "/URBANIUM.png";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  ConfirmationResult,
  updateProfile,
  User as FirebaseUser,
  onAuthStateChanged
} from "firebase/auth";
import { auth } from "@/lib/firebase";

declare global {
  interface Window {
    recaptchaVerifier: RecaptchaVerifier;
  }
}

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState<'email' | 'phone'>('email');
  const [creatingAvatar, setCreatingAvatar] = useState(false);

  // Animation variants from 1st UI
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    exit: { opacity: 0, y: -30, transition: { duration: 0.3 } }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.02, 
      boxShadow: "0 10px 25px rgba(45, 195, 230, 0.4)",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.98 }
  };

  // Auto redirect if already logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/dashboard");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  // Recaptcha setup
  useEffect(() => {
    try {
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(
          "recaptcha-container",
          { size: "invisible" },
          auth
        );
      }
    } catch (err) {
      console.error("Recaptcha Init Error:", err);
    }
  }, []);

  // Avatar creation - EXACTLY like the pink F image (first letter of email)
  const createAvatar = async (user: FirebaseUser) => {
    try {
      setCreatingAvatar(true);
      
      // Skip if user already has avatar
      if (user.photoURL) {
        console.log("User already has avatar:", user.photoURL);
        return;
      }

      // Get FIRST LETTER of email (like the pink F in your image)
      const firstLetter = user.email?.charAt(0).toUpperCase() || 'U';
      
      // Pink color like your F avatar (#EC4899 background, white text)
      const pinkColor = 'EC4899'; // Exact pink from your Firebase avatar
      
      // Create avatar URL exactly like Firebase style
      const avatarUrl = `https://ui-avatars.com/api/?name=${firstLetter}&background=${pinkColor}&color=fff&size=128&rounded=true&bold=true&font-size=0.6&format=png`;
      
      await updateProfile(user, {
        displayName: `User ${firstLetter}`,
        photoURL: avatarUrl
      });
      
      console.log("✅ Avatar created with first letter:", firstLetter, avatarUrl);
    } catch (err) {
      console.error("❌ Avatar creation failed:", err);
    } finally {
      setCreatingAvatar(false);
    }
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      let userCredential;
      if (isLogin) {
        userCredential = await signInWithEmailAuth(auth, email, password);
      } else {
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
        if (userCredential.user) {
          await createAvatar(userCredential.user); // Create avatar on signup
        }
      }
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      await createAvatar(result.user); // Override Google avatar with custom first-letter avatar
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message || "Google sign-in failed");
    } finally {
      setLoading(false);
    }
  };

  const handleSendOTP = async () => {
    if (!phone) return setError("Please enter phone number");
    setError("");
    setLoading(true);
    try {
      if (!window.recaptchaVerifier) {
        throw new Error("Recaptcha not initialized");
      }
      const confirmation = await signInWithPhoneNumber(auth, phone, window.recaptchaVerifier);
      setConfirmationResult(confirmation);
      setError("OTP sent successfully!");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    if (!confirmationResult || otp.length !== 6) return;
    setLoading(true);
    setError("");
    try {
      const result = await confirmationResult.confirm(otp);
      await createAvatar(result.user); // Create avatar after phone verification
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
      {/* LEFT PANEL */}
      <motion.div 
        className="flex items-center justify-center px-6 lg:px-12 py-12 lg:py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="w-full max-w-md"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo - Staggered */}
          <motion.div variants={itemVariants}>
            <Link to="/" className="flex items-center gap-3 mb-10">
              <motion.img 
                src={UrbaniumLogo} 
                className="h-10 w-10 drop-shadow-lg"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <div>
                <div className="font-bold text-lg">urbanium.ai</div>
                <div className="text-xs tracking-wide text-muted-foreground">
                  SMART AUTOMATION
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Title */}
          <motion.h1 
            className="text-3xl font-bold mb-2"
            variants={itemVariants}
          >
            {isLogin ? "Welcome Back" : "Create Account"}
          </motion.h1>
          <motion.p 
            className="text-muted-foreground mb-6"
            variants={itemVariants}
          >
            {activeTab === 'email' ? 'Sign in with email or phone' : 'Access your smart ecosystem'}
          </motion.p>

          {/* Error */}
          <AnimatePresence>
            {error && (
              <motion.div 
                className="mb-6 rounded-md bg-red-500/10 text-red-500 text-sm p-4 border border-red-500/30 flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <ShieldCheck className="h-5 w-5 flex-shrink-0" />
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tab Navigation */}
          <motion.div className="flex bg-white/50 backdrop-blur-sm rounded-2xl p-1 mb-6 shadow-lg border border-gray-200/50" variants={itemVariants}>
            {(['email', 'phone'] as const).map((tab) => (
              <motion.button
                key={tab}
                className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
                onClick={() => setActiveTab(tab)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {tab === 'email' ? 'Email' : 'Phone'}
              </motion.button>
            ))}
          </motion.div>

          {/* Forms with slide transition */}
          <AnimatePresence mode="wait">
            {activeTab === 'email' && (
              <motion.form 
                key="email-form"
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onSubmit={handleEmailAuth}
                className="space-y-6"
              >
                <motion.div variants={itemVariants}>
                  <label className="text-sm font-medium block mb-3 text-gray-700">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-12 h-12 bg-white/50 border-gray-200 focus:border-blue-500 focus:ring-blue-500/50 backdrop-blur-sm"
                      required
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="text-sm font-medium block mb-3 text-gray-700">Password</label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pr-12 h-12 bg-white/50 border-gray-200 focus:border-purple-500 focus:ring-purple-500/50 backdrop-blur-sm"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-lg transition-all duration-200"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5 text-gray-500" />
                      ) : (
                        <Eye className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Button 
                    type="submit"
                    disabled={loading || !email || !password || creatingAvatar}
                    className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-2xl shadow-lg transition-all duration-200"
                    asChild
                  >
                    <motion.div
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      {loading || creatingAvatar ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          {creatingAvatar ? "Creating Avatar..." : (isLogin ? "Signing In..." : "Creating...")}
                        </>
                      ) : (
                        <>
                          {isLogin ? "Sign In" : "Create Account"}
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </motion.div>
                  </Button>
                </motion.div>
              </motion.form>
            )}

            {activeTab === 'phone' && (
              <motion.div
                key="phone-form"
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-6"
              >
                {!confirmationResult ? (
                  <>
                    <motion.div variants={itemVariants}>
                      <label className="text-sm font-medium block mb-3 text-gray-700">Mobile Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                        <Input
                          type="tel"
                          placeholder="+91 9876543210"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="pl-12 h-12 bg-white/50 border-gray-200 focus:border-green-500 focus:ring-green-500/50 backdrop-blur-sm"
                        />
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <Button
                        onClick={handleSendOTP}
                        disabled={loading || !phone}
                        className="w-full h-12 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-2xl shadow-lg transition-all duration-200"
                        asChild
                      >
                        <motion.div
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                        >
                          {loading ? (
                            <>
                              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                              Sending OTP...
                            </>
                          ) : (
                            <>
                              <Smartphone className="mr-2 h-5 w-5" />
                              Send OTP
                            </>
                          )}
                        </motion.div>
                      </Button>
                    </motion.div>
                  </>
                ) : (
                  <>
                    <motion.div variants={itemVariants}>
                      <label className="text-sm font-medium block mb-3 text-gray-700">Enter OTP</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                        <Input
                          type="text"
                          placeholder="123456"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                          maxLength={6}
                          className="pl-12 h-12 bg-white/50 border-gray-200 focus:border-blue-500 focus:ring-blue-500/50 backdrop-blur-sm text-lg tracking-widest text-center"
                        />
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex gap-3">
                      <Button
                        variant="outline"
                        onClick={() => {
                          setConfirmationResult(null);
                          setOtp("");
                        }}
                        className="flex-1 h-12 border-gray-300 hover:bg-gray-50 transition-colors"
                      >
                        Back
                      </Button>
                      <Button
                        disabled={loading || otp.length !== 6 || creatingAvatar}
                        onClick={handleVerifyOTP}
                        className="flex-1 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-2xl shadow-lg transition-all duration-200"
                        asChild
                      >
                        <motion.div
                          variants={buttonVariants}
                          whileHover="hover"
                          whileTap="tap"
                        >
                          {loading || creatingAvatar ? (
                            <>
                              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                              {creatingAvatar ? "Creating Avatar..." : "Verifying..."}
                            </>
                          ) : (
                            "Verify OTP"
                          )}
                        </motion.div>
                      </Button>
                    </motion.div>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Divider */}
          <motion.div 
            className="my-8 flex items-center gap-3 text-sm text-muted-foreground"
            variants={itemVariants}
          >
            <div className="flex-1 h-px bg-gray-200" />
            Or continue with
            <div className="flex-1 h-px bg-gray-200" />
          </motion.div>

          {/* Google Button */}
          <motion.div variants={itemVariants}>
            <Button
              variant="outline"
              className="w-full h-12 border-2 border-gray-200 hover:bg-gray-50 text-gray-800 font-semibold rounded-2xl shadow-lg transition-all duration-200 flex items-center justify-center gap-3 group"
              onClick={handleGoogleLogin}
              disabled={loading || creatingAvatar}
              asChild
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5 group-hover:rotate-[360deg] transition-all duration-500" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </motion.div>
            </Button>
          </motion.div>

          {/* Footer Toggle */}
          <motion.p 
            className="text-center text-sm mt-8 text-muted-foreground"
            variants={itemVariants}
          >
            {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setActiveTab('email');
                setConfirmationResult(null);
                setOtp("");
                setError("");
              }}
              className="font-semibold text-blue-600 hover:text-blue-700 transition-colors ml-1 hover:underline"
            >
              {isLogin ? "Sign up" : "Sign in"}
            </button>
          </motion.p>

          <div id="recaptcha-container" className="invisible h-1" />
        </motion.div>
      </motion.div>

      {/* RIGHT PANEL - Shimmer gradient animation */}
      <motion.div 
        className="hidden lg:flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-transparent to-blue-500/20"
          animate={{
            x: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <div className="relative text-center text-white max-w-md px-6">
          <motion.div 
            className="inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <img src={UrbaniumLogo} className="h-12 w-12" alt="Urbanium" />
          </motion.div>

          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Manage Your Smart Ecosystem
          </motion.h2>
          <motion.p 
            className="text-slate-300 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Monitor, control, and automate everything from one intelligent dashboard.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
