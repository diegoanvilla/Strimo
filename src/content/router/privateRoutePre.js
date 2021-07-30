import React, {useEffect} from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Navbar from "../navbar/navbar.jsx";
import Admin from "../navbar/admin";
import Creador from "../navbar/creador";
export default function PrivateRoutes({ component: Component, ...rest }) {
  const { currentUser, role, nickname } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <>
            {nickname!=undefined ? 
              <>
                {role === "admin" && <Admin />}
                <Navbar pre={true} />
                {role === "creador" && <Creador />}
                <Component {...props} />
              </>
            :
              <Redirect to="/nickname"/>
            }
          </>
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
}
