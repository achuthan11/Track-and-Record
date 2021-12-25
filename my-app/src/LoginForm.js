import React, { useState } from 'react';
import Axios from 'axios';
import './App.css'
function Login (){

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loginState,setLoginState] = useState('')

    const login = ()=>{
        Axios.post("http://localhost:3001/login", {
            email: email,
            password: password
        }).then((response )=>{
          if(response){
            setLoginState(response.data)
            console.log(response);
            }
        })
      
    };


    return (
    <form className='App'>
        <div>
          <label>Email: </label>
          <input type='email' name="email" onChange={(e) => setEmail(e.target.value)} id="email"/>
          <br></br>
        </div>
        <div>
          <label>Password: </label>
          <input type='password' name="password" onChange={(e) => setPassword(e.target.value)} id="password"/> 
          <br></br>
        </div>
        <button onClick={login}>Submit</button>
        <h2>{loginState}</h2>
      </form>

    )};

export default Login;