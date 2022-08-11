import { useState } from "react";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAHiX25Jq-lURNmjlLlYWpUHM2GSnCEzxM",
  authDomain: "first-login-9893a.firebaseapp.com",
  projectId: "first-login-9893a",
  storageBucket: "first-login-9893a.appspot.com",
  messagingSenderId: "821654267894",
  appId: "1:821654267894:web:523e9eeffafe89943409d7",
};

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");

  const connectAuth = async () => {
    const app = initializeApp(firebaseConfig);
    return getAuth(app);
  };

  const handleLogin = async () => {
    const auth = await connectAuth();
    const user = signInWithEmailAndPassword(auth, email, password)
    .catch( err => alert(err.message)
    );
    if (user) {
      console.log(user.user);
      setIsLoggedIn(true);
    }
  };

  const handleGoogleLogin = async () => {
    const auth = await connectAuth()
    const provider = new GoogleAuthProvider()
    const user = await signInWithPopup()(auth, provider)
        .catch(err => alert(err.message))
    if(user) {
        console.log(user.user)
        setIsLoggedIn(true)

    }


  }



  const handleSignUp = async () => {
    //connect to firebase proj
    //connnect to Auth
    const auth = await connectAuth();
    //send email and password to firebase auth
    const user = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).catch(err => alert(err.message));
    //if all ok..
    if (user) {
      console.log(user.user);
      setIsLoggedIn(true);
    }
    //if error
    //popup error
  };
  return (
    <form onSubmit={(e) => e.preventDefault}>
      <label htmlFor="email">
        Email:
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder="you@there.com"
        />
      </label>
      <br />
      <label for="password">
        Password:
        <input
          value={password}
          onChange={(e) => setPasssword(e.target.value)}
          name="password"
          type="password"
        />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>&nbsp;
      <button onClick={handleSignUp}>Sign up</button>
      <br/>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </form>
  );
}

export default Login;
