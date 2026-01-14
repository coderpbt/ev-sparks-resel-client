import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/DpiContext/ContextProvider";
import Loading from "../../component/Sheard/Loading/Loading";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // 🔥 WAIT ONLY FOR AUTH LOADING
  if (loading) {
    return <Loading />;
  }

  // 🔥 TOKEN EXISTS = ALLOW
  const token = localStorage.getItem("accessToken");

  if (user || token) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
