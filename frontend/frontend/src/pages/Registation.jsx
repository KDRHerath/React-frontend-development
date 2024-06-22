import React from 'react'
import { Link } from 'react-router-dom'
import photo from '../images/l2 1.png'
import '../CSS/registation.css'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Registation() {

    const [parsword ,setPAssword] = useState("");
    const [parsword2 ,setPAssword2] = useState("");
    const[error , setError]  = useState(false);
    const[error1 , setError1]  = useState(false);

  useEffect(()=>{
    
      if (parsword !== parsword2 ){
        setError(true);
       
      }else if(parsword2 === ""){
        
      }else {
        
        setError1(true);
      }
      console.log(error);

      return ()=>{
        setError(false);
        setError1(false);
      }
    

  },[parsword2]) 
  
    
    return (
    <div className ='re-container1'>
      <div className ='re-container'>
        <div className ='div-container1'>
          <h1 className ='re-h1'>Get Started</h1>
          <p className ='re-p'>By creating a free account</p>
          <form className ='form-container' >
            
            <div className ='form-div'>
              <input type="text"  name="username" placeholder='User name' className='input-container' required/>
            </div>
                    
            <div className='form-div'>
              <input type="text"  name="e-mail" placeholder='E-mail'className='input-container'  required />
            </div>
                    
            <div className='form-div'>
              <input type="password"  name="password" placeholder='Password'className='input-container' value={parsword}  onChange={e=>{setPAssword(e.target.value)}}  required />
            </div>
                    
            <div className='form-div'>
              <input type="password"  name="comfirmPassword" placeholder='Conform Password'className='input-container' value={parsword2} onChange={e=>{setPAssword2(e.target.value)}} required />
              {error && <p className='inside-input'>Password is not match</p>}
              {error1 && <p className='inside-input1'>Password is  matchd</p>}
            </div>
                    
            <div className='button-container'>
              <button type="submit" className='button1'>Sign-Up</button>
            </div>
          </form>
          <p className='re-p2'>Do you have a account? <Link className='link-container' to='/login' > Login Now</Link> </p>
        </div>
        <div className='div-container'>
          <img className='image ' src={photo} alt="l1 " />
        </div>
      </div>
    </div>
  )
}
