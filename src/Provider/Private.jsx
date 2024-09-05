import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Private = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading)
    return (
      <div className="h-[300px] flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  if (user) return children;
  return <Navigate to={"/login"} state={location.pathname} />;
};

export default Private;
