import React, {useState} from 'react'
import Header from '../components/Header';
import register from '../assets/register.svg'
import { Link } from 'react-router-dom';

export default function Register() {

    const [input,setinput] = useState({
        name:'',
        address:'',
        city:'',
        pincode:'',
        phone:'',
        password:'',
        rpassword:''
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
            <h1 style={{color:"#fff",textAlign:"center"}}>Register</h1>
            <form method='post' onSubmit={handleSubmit}>
                <div className='txt_field'>
                    <input type="text" required={true} name="name" value={input.name} onChange={handleChange}/>
                    <span></span>
                    <label>Name</label>
                </div>
                <div className='txt_field'>
                    <input type="tel" required={true} name="phone" value={input.phone} onChange={handleChange}/>
                    <span></span>
                    <label>Phone Number</label>
                </div>
                <div className='txt_field'>
                    <input type="password" required={true} onChange={handleChange} name="password" value={input.password}/>
                    <span></span>
                    <label>Password</label>
                </div>
                <div className='txt_field'>
                    <input type="password" required={true} onChange={handleChange} name="rpassword" value={input.rpassword}/>
                    <span></span>
                    <label>Re type Password</label>
                </div>
                <div className='txt_field'>
                    <input type="text" required={true} onChange={handleChange} name="address" value={input.address}/>
                    <span></span>
                    <label>Address</label>
                </div>
                <div className='txt_field'>
                    <input type="text" required={true} onChange={handleChange} name="city" value={input.city}/>
                    <span></span>
                    <label>City</label>
                </div>
                <div className='txt_field'>
                    <input type="text" required={true} onChange={handleChange} name="pincode" value={input.pincode}/>
                    <span></span>
                    <label>Pincode</label>
                </div>
                <input type="submit" value="Register"  />
                <div className="signup_link">
                    Already a Member?<Link to="/login"><p>Sign In</p></Link>
                </div>
            </form>
        </div>
        <div>
            <img src={register} alt="SVG NOT FOUND" width="60%" height="100%" style={{marginLeft:"10%"}}/>
        </div>
        </div>
    </>
  )
}
