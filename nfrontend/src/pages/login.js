import { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword }from "firebase/auth";
import { headers } from 'next/dist/client/components/headers';
const firebaseConfig = {
   apiKey: "AIzaSyC9gOetNNR6vCltoBxAcHwfUvKKXp7wU8I",
  authDomain: "wikit-xino.firebaseapp.com",
  projectId: "wikit-xino",
  storageBucket: "wikit-xino.appspot.com",
  messagingSenderId: "1006145371026",
  appId: "1:1006145371026:web:ede61cc6179d280c071f4b",
  measurementId: "G-E6RKPVEWST"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default Login = () => {
   const formData = new FormData();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const headersList = {
 "Accept": "*/*",

 "Content-Type": "application/json"
    }
    const data = null;
    const respondLogin = () => {
    fetch('http://127.0.0.1:4996/api/login', {
        method: 'POST',
        
        body : JSON.stringify({
            "email": "thisis@gmail.ciom",
            "password" : "thisisapassword"
        }),
        headers: headersList

      })
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input className='text-black'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input className='text-black'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};}
