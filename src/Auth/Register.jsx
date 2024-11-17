import React from 'react'
import { Form, useNavigate } from 'react-router-dom'
import LRform from './components_auth/LRform'
import axios from 'axios'

const Register = () =>{ 
  const baseurl = import.meta.env.VITE_BASE_URL
  const navigate =useNavigate()
const handleRegister = async(data)=>{
try{
  const response = await  axios.post(`${baseurl}/register`,data)
  console.log(response)
  if (response.status === 201)
  {
navigate('/login')
  }
  else{
    alert("Registration failed")
  }
}
  catch (error){
    alert(error?.response?.data?.message)
  }
}
  

  return (

    
    <LRform type='Register' onSubmit={handleRegister}/>
  )

}
export default Register