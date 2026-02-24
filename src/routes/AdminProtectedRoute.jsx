import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AdminProtectedRoute = () => {
  const token = useSelector(state => state.adminauth.token);
  if (!token) return <Navigate to="/admin/dashboard" replace />;

  return <Outlet />;
};

export default AdminProtectedRoute;