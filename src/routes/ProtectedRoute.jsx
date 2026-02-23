import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = useSelector(state => state.adminauth.token);
  if (!token) return <Navigate to="/admin/dashboard" replace />;

  return <Outlet />;
};

export default ProtectedRoute;