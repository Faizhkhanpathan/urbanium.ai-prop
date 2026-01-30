import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import UrbaniumLogo from "/URBANIUM.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 mb-8">
            <img
              src={UrbaniumLogo}
              alt="urbanum.ai logo"
              className="h-10 w-10 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground">
                urbanum.ai
              </span>
              <span className="text-[10px] text-muted-foreground -mt-1 tracking-wider">
                SMART AUTOMATION
              </span>
            </div>
          </Link>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              {isLogin ? "Welcome back" : "Create account"}
            </h1>
            <p className="text-muted-foreground">
              {isLogin
                ? "Sign in to access your smart dashboard and manage your ecosystem."
                : "Get started with urbanum.ai and connect your devices."}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    First Name
                  </label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Last Name
                  </label>
                  <Input placeholder="Doe" />
                </div>
              </div>
            )}

            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                Email Address
              </label>
              <Input type="email" placeholder="john@company.com" />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">
                Password
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="rounded border-border" />
                  <span className="text-muted-foreground">Remember me</span>
                </label>
                <a href="#" className="text-sm text-accent hover:underline">
                  Forgot password?
                </a>
              </div>
            )}

            <Button variant="teal" className="w-full" size="lg">
              {isLogin ? "Sign In" : "Create Account"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-background px-4 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline">Google</Button>
            <Button variant="outline">GitHub</Button>
          </div>

          {/* Toggle */}
          <p className="text-center text-sm text-muted-foreground mt-8">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-accent font-medium hover:underline"
            >
              {isLogin ? "Sign up" : "Sign in"}
            </button>
          </p>
        </div>
      </div>

      {/* Right Panel */}
      <div className="hidden lg:flex flex-1 bg-hero-gradient items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

        <div className="relative text-center text-white max-w-lg">
          <div className="inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-sm mb-8">
            <img
              src={UrbaniumLogo}
              alt="urbanum.ai"
              className="h-12 w-12 object-contain"
            />
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Manage Your Smart Ecosystem
          </h2>
          <p className="text-slate-300 text-lg">
            Monitor, control, and automate your environment from a single
            intelligent dashboard.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
