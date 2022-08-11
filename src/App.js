import { useState } from 'react'
import Login from './components/Login';
import SecretStuff from './components/SecretStuff';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return ( 
    <>
    <header>   
    <h1>My First Login</h1>
    </header>
    {isLoggedIn
        ?<SecretStuff/>
        : <Login setIsLoggedIn={setIsLoggedIn}/>
      
    }
    </>
  );
}

export default App;
