import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  if (!user) return <h2>Please login first</h2>;
  return children;
}

export default ProtectedRoute;
