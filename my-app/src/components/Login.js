import React, { useContext, useLayoutEffect } from "react";
import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { AuthContext } from "../context/AuthContex";

const Login = () => {
  const authContex = useContext(AuthContext);
  // useLayoutEffect waits for the div to be in the DOM
  useLayoutEffect(() => {
    const ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", {
      signInOptions: [
        // List of OAuth providers supported.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      signInFlow: "popup",
      callbacks: {
        signInSuccessWithAuthResult: (authresult) => {
          const { displayName, uid } = authresult;
          const authUser = {
            uid,
            displayName,
          };
          authContex.login(authUser)
          return false;
        },
      },
    });
  }, [authContex]);

  return <div id="firebaseui-auth-container"></div>;
};

export default Login;
