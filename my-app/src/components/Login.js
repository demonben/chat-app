import React, { useLayoutEffect } from "react";
import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";

const Login = () => {
  useLayoutEffect(() => {
    const ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", {
      signInOptions: [
        // List of OAuth providers supported.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ],
      // Other config options...
    });
  }, []);

  return <div id="firebaseui-auth-container"></div>;
};

export default Login;
