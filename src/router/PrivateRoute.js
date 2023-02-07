import { Navigate } from "react-router-dom";
import { isLogin } from "../utils/CheckLogin";

const PrivateRoute = ({ children }) => {
  return (
    <>
      {isLogin ? (
        children
      ) : (
        <>
          <Navigate to={"/"} />
        </>
      )}
    </>
  );
};

export default PrivateRoute;
