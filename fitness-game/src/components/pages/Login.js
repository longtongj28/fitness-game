import React from 'react';
import "../css/home.css";
import { signInWithGoogle } from '../../firebase'

const Login = () => {
  return (
    <>
    <div className='homeLogin'>
        <button onClick={signInWithGoogle}>
            Sign In With Google
        </button>
        <h1>{localStorage.getItem("name")}</h1>
        <img src={localStorage.getItem("profilePic")}/>
        
    </div>
    </>
  )
}

export default Login