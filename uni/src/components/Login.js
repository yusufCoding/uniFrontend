import React, { useState } from 'react'
import loginImg from "../assets/universitaet.jpg"
import Service from '../services/Service';
import { NavigationType, useNavigate } from 'react-router-dom';
const Login = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name : "",
    password : ""
  });

  const login = (e) => {
    e.preventDefault();
    Service.login(user).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }
    

  
  const register = (e) => {
    e.preventDefault();
    Service.login(user).then((response) => {
      console.log("Neuer User wird angelegt" + response)
      navigate("/eas");
    }).catch((error) => {
      console.log(error);
    })
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({...user, [e.target.name] : value});
  }

  return (
    <div className='relative w-full h-screen bg-zinc-900/90'>
    <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt="/" />


<div className='flex justify-center items-center h-full'>
    <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
        <h2 className='text-4xl font-bold text-center py-4'>Universität Siegen</h2>
        <div className='flex flex-col mb-4'>
            <label>Username</label>
            <input value={user.name} name="name" className='border relative bg-gray-100 p-2' type="text" onChange={(e) => handleChange(e)}></input>
        </div>
        <div className='flex flex-col '>
            <label>Password</label>
            <input value={user.password} name="password" className='border relative bg-gray-100 p-2' type="password" onChange={(e) => handleChange(e)}></input>
        </div>
        <button onClick={login} className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white'>Einloggen</button>
        <button onClick={register} className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white'>Registrieren</button>
    </form>
</div>
</div>
  )
}

export default Login