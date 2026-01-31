import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../src/lib/firebase.js";

export default function ProtectedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const [user, loading] = useAuthState(auth);

  if (loading) return null;
  if (!user) return <Navigate to="/login" />;

  return children;
}
