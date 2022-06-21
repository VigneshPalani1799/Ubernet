import React, { useState } from 'react'
import Header from '../components/Header';
import login from '../assets/login.svg';

export default function LoginPage() {

    const [input,setinput] = useState({
        phone:'',
        password:''
    });

    const handleChange = (event) =>{
        const {name,value} = event.target;

        setinput(prevInput=>{
            return{
            ...prevInput,
            [name]:value
            }
        })
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(input);
    }

  return (
    <>
        <Header/>
        <div className='login_grid'>
        <div className='center' style={{marginLeft:"20px"}}>
            <h1 style={{color:"#fff",textAlign:"center"}}>Login</h1>
            <form method='post' onSubmit={handleSubmit}>
                <div className='txt_field'>
                    <input type="tel" required={true} name="phone" value={input.phone} onChange={handleChange}/>
                    <span></span>
                    <label>Phone number</label>
                </div>
                <div className='txt_field'>
                    <input type="password" required={true} onChange={handleChange} name="password" value={input.password}/>
                    <span></span>
                    <label>Password</label>
                </div>
                <div className='pass'>Forgot Password?</div>
                <input type="submit" value="Login"  />
                <div className="signup_link">
                    Not a Member?<p>Register Now</p>
                </div>
            </form>
        </div>
        <div>
            <img src={login} alt="SVG NOT FOUND" width="60%" height="100%" style={{marginLeft:"25px"}}/>
        </div>
        </div>
    </>
  )
}
