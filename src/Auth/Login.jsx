import React from 'react'
import LRform from './components_auth/LRform'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const {baseurl} = import.meta.env.VITE_BASE_URL
  const navigate =useNavigate()
const handleLogin = async(data)=>{
try{
  const response = await  axios.post(`${baseurl}/login`,data)
  console.log(response)
  if (response.status === 200)
  {
navigate('/')
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
    <div>
 <LRform type = 'Login' onSubmit={handleLogin} />
 </div>
  )
}

export default Login