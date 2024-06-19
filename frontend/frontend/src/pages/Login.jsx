import React, { useState } from 'react';
import '../CSS/login.css';
import photo from '../images/l1.webp';
import { Link } from 'react-router-dom';
import axios from 'axios'

export default function Login() {

  const [userName , setName] = useState( "");
  const [password ,setPassword] = useState("");

  function handelSubmit(event){
    event.preventDefault();
    axios.post('http://localhost:8080/login' , {userName , password})
    .then(res => console.log(res)).catch(err=>console.log(err));
  }

  return (
    <div className='login-container1'>
       <div className="login-container">
            <div className='div-container1'>
                <h1 className='in-h1'>Welcome Back</h1>
                <p className='in-p'>Sign in to access in to account</p>
                <form className='form-container' onSubmit={handelSubmit}>
                    <div className='form-div'>
                       
                        <input type="text" value={userName} name="username" placeholder='User name' className='input-container' onChange={e=>setName(e.target.value)}/>
                    </div>
                    <div className='form-div'>
                        
                        <input type="password" value={password} name="password" placeholder='Password'className='input-container' onChange={e=>setPassword(e.target.value)} />
                    </div>
                    <div className='button-container'>
                        <button type="submit" className='button1'>Login</button>
                    </div>
                    
                </form>
                <p className='in-p2'>New Member? <Link className='link-container' to='/registation' > Registor Now</Link> </p>
            </div>
            <div className='div-container'>
              <img className='image ' src={photo} alt="l1 " />
            </div>
      </div>
    </div>
   
  )
}
