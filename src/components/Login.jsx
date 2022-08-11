import { useState } from 'react'
import { initializeApp } from 'firebase/app'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyBJxfQ8G0guqVNjAgURKddTUEYvP__GPPg",
    authDomain: "first-login-abp.firebaseapp.com",
    projectId: "first-login-abp",
    storageBucket: "first-login-abp.appspot.com",
    messagingSenderId: "797689052122",
    appId: "1:797689052122:web:e947f3ab3a7e0520091ee3"
  };


function Login({ setIsLoggedIn }) {
    const [email, setEmail] =useState('')
    const [password, setPasssword] =useState('')
    const handleSignUp = async () => {

        //connect to firebase proj
        const app = initializeApp(firebaseConfig)
        //connnect to Auth

        const auth = getAuth(app);
        //send email and password to firebase auth
        const user = await createUserWithEmailAndPassword(auth, email, password)
        .catch(err => alert(err.message))
        //if all ok..
        if(user) {
            console.log(user)
            setIsLoggedIn(true)

        }
        //if error 
        //popup error
    }
        return (
                <form onSubmit={(e) => e.preventDefault}>
                    <label htmlFor="email">
                        Email: 
                        <input 
                        value={email} onChange={e => setEmail(e.target.value)}
                        name="email" type="email" placeholder="you@there.com"/> 
                    </label><br/>
                    <label for="password">
                        Password: 
                        <input 
                        value={password} onChange={e => setPasssword(e.target.value)}
                        name="password" type="password"/> 
                    </label><br/>
                    <button onClick={handleSignUp}>Sign up</button>
                </form>
                 )
                }

export default Login; 