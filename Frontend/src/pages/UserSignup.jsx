import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { UserDataContext } from '../context/UserContext';



const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname,setFirstname] = useState('')
  const [lastname,setLastname] = useState('')
  const {user,setUser} = useContext(UserDataContext)

  const navigate = useNavigate()
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const newUser = {
      fullname:{
        firstname:firstname,
        lastname:lastname,
      },
      email:email,
      password: password
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)

    if(response.status === 201){
      const data = response.data

      setUser(data.user)
      localStorage.setItem('token',data.token)  

      navigate('/home')


    }

    setFirstname('')
    setLastname('')
    setEmail('')
    setPassword('')
  }
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
    <div className="mb-5">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        className="w-16 mb-5 sm:mx-auto"
        alt="uber-logo"
      />
      <form onSubmit={handleSubmit}>
      <div className="flex flex-col w-full justify-between">
            <h3>What's your full name</h3>
            <div className="flex w-full justify-between">
            <input
                className="bg-gray-100 rounded px-4 py-2 border w-[48%] text-lg placeholder:text-sm mb-3 focus:outline-none"
                value={firstname}
                type="text"
                required
                placeholder="Firstname"
                onChange={(e) => setFirstname(e.target.value)}
              />
              <input
                className="bg-gray-100 rounded px-4 py-2 border w-[48%] text-lg placeholder:text-sm mb-3 focus:outline-none"
                value={lastname}
                type="text"
                placeholder="Lastname"
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
          </div>
        <h3 className="text-lg font-medium mb-2">What's your email</h3>
        <input
          className="bg-gray-100 rounded px-4 py-2 border w-full text-lg placeholder:text-sm mb-3 focus:outline-none"
          value={email}
          type="email"
          required
          placeholder="email@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <h3 className="text-lg font-medium mb-2">Enter password</h3>
        <input
          className="bg-gray-100 rounded px-4 py-2 border w-full text-lg placeholder:text-sm mb-3 focus:outline-none"
          value={password}
          type="password"
          required
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="flex w-full bg-black text-white justify-center items-center py-2 rounded font-semibold mb-3">
          Sign up
        </button>
        <p className="text-center">Already have a account?<Link to='/login' className="text-blue-600">Login here</Link></p>
      </form>
    </div>
  </div>
  )
}

export default UserSignup
