import React, {useState} from 'react'
import Header from '../components/Header';
import register from '../assets/register.svg'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Register() {

    const [input,setinput] = useState({
        name:'',
        address:'',
        city:'',
        pincode:'',
        phone:'',
        password:'',
        rpassword:'',
        message:''
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
        if(!input.pincode.match(/57[0-9]{4}/)){
            setinput(prevInput=>{
                return{
                    ...prevInput,
                    message:"Sorry we dont serve this city yet"
                }
            });
            return;
        }
        else{
            setinput(prevInput=>{
                return{
                    ...prevInput,
                    message:""
                }
            });
        }
        if(input.password!==input.rpassword){
            setinput(prevInput=>{
                return{
                    ...prevInput,
                    message:"Both Passwords should match."
                }
            })
            return;
        }
        axios.get(`http://localhost:3001/user/${input.phone}`)
        .then(res=>{
            if(res.data===null){
                setinput(prevInput=>{
                    return{
                        ...prevInput,
                        message:"Registration successful"
                    }
                })
            }
            else{
                if(res.data.phone===input.phone)
                setinput(prevInput=>{
                    return{
                        ...prevInput,
                        message:"User already exist"
                    }
                })
            }
        })
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
                    <input type="tel" required={true} name="phone" value={input.phone} onChange={handleChange} pattern="[6-9]{1}[0-9]{9}"/>
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
                    <input type="text" required={true} onChange={handleChange} name="pincode" value={input.pincode} pattern="[0-9]{6}"/>
                    <span></span>
                    <label>Pincode</label>
                </div>
                <p style={{color:"red"}}>{input.message}</p>
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
