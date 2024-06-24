import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import photo from '../images/l2 1.png'
import '../CSS/registation.css'
import { useState } from 'react'
import { useEffect } from 'react'
import validation from '../Components/Sign-up_validation/vlaidation'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Registation() {

    const [userName ,setUserName] = useState("");
    const [parsword ,setPAssword] = useState("");
    const [parsword2 ,setPAssword2] = useState("");
    const[error , setError]  = useState(false);
    const[error1 , setError1]  = useState(false);
    const [email , setEmail] = useState("");
    const [erro2 ,setError2]  = useState("")

    const navigate = useNavigate();

  useEffect(()=>{
    
      if (parsword !== parsword2 ){
        setError(true);
       
      }else if(parsword2 === ""){
        
      }else {
        
        setError1(true);
      }
      
      return ()=>{
        setError(false);
        setError1(false);
      }
    

  },[parsword2]) 

  
  const handelSubmit = (event)=>{

    event.preventDefault();
    setError2(validation(email));
    
    axios.post('http://localhost:8080/api/registation' , {userName , email , parsword})
    .then(res => {console.log(res) 
      if(res.status === 201 ){
        navigate('/login')
      }
  }).catch(err=>console.log(err))
    

   }


    
    return (
    <div className ='re-container1'>
      <div className ='re-container'>
        <div className ='div-container1'>
          <h1 className ='re-h1'>Get Started</h1>
          <p className ='re-p'>By creating a free account</p>
          <form className ='form-container' onSubmit={handelSubmit}>
            
            <div className ='form-div'>
              <input type="text"  name="username" placeholder='User name' className='input-container' value={userName} onChange={e=>{setUserName(e.target.value)}} required/>
            </div>
                    
            <div className='form-div'>
              <input type="text"  name="e-mail" placeholder='E-mail'className='input-container' onChange={e=>{setEmail(e.target.value)}} value={email} required />
              {erro2 && <p className='inside-input'>{erro2}</p>}
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
