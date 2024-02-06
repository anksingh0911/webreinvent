import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { authenticateUser } from '../../utils/authentication';
import { RootState } from '../../utils/appStore';
import Button from './Button';

interface props {
  title: string;
}
interface userAuth{
  id?:string,
  token: string
}
const Form: React.FC<props>= ({title}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const error = useSelector((store:RootState)=> store.user?.errors);
  const userInfo = useSelector((store:RootState)=> store.user?.userInfo)

  useEffect(()=>{
   if(userInfo.token !== ""){
    console.log('hi')
    navigate("/dashboard")
   }
 },[userInfo])
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault()
    authenticateUser(email, password, title, dispatch)
  }
  return (
    <div className='p-3 shadow-xl border bg-white w-[90%] sm:w-8/12 md:w-5/12 lg:w-3/12 mx-auto mt-8 rounded-md'>
      <h1 className='text-center font-semibold text-xl'>{title === "login" ? "Login" : "Register"}</h1>
      <p className='text-sm text-center text-gray-400 mb-3'>
        {`use "eve.holt@reqres.in" as a email and ${title === "login" ? "'cityslicka'" : "'pistol'"} as a password`}
      </p>
      <form className='py-2'>
        <input className='p-2 border rounded w-full mb-3' type="email" placeholder='Your email' onChange={(e)=> setEmail(e.target.value)}/>
        <input className='p-2 border rounded w-full mb-3' type="password" placeholder='Enter your password' onChange={(e)=> setPassword(e.target.value)}/>
        <Button label={title === "login" ? "Login" : "Register"} size='medium' variant='success' onClick={(e)=> handleClick(e)}/>
      </form>
      {error &&(
        <p className='text-sm text-red-500'>{error}</p>
      )}
      <p className='text-sm text-center my-2'>
        Already a user ? <a href='/' className='text-blue-400 cursor-pointer font-semibold'>{title === "login" ? "Register" : "Login"}</a> 
      </p>
    </div>
  )
}

export default Form;