import React, { useLayoutEffect } from "react";
import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui"; 
import 'firebaseui/dist/firebaseui.css'

const Login = () => {
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
      // Other config options...
    });
  }, []);

  return <div id="firebaseui-auth-container"></div>;
};

export default Login;
