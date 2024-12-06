import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainLogin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {captain,setCaptain} = useContext(CaptainDataContext)

  const navigate = useNavigate()

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const captainLogin ={
      email:email,
      password:password
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`,captainLogin)
    if(response.status === 201){
      const data =response.data
      setCaptain(data.captain)
      localStorage.setItem('captainToken',data.token)
      navigate('/captain-home')
    }
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
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            className="bg-gray-100 rounded px-4 py-2 border w-full text-lg placeholder:text-sm mb-7 focus:outline-none"
            value={email}
            type="email"
            required
            placeholder="email@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3 className="text-lg font-medium mb-2">Enter password</h3>
          <input
            className="bg-gray-100 rounded px-4 py-2 border w-full text-lg placeholder:text-sm mb-7 focus:outline-none"
            value={password}
            type="password"
            required
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="flex w-full bg-black text-white justify-center items-center py-2 rounded font-semibold mb-3">
            Login
          </button>
          <p className="text-center">
            New here?{" "}
            <Link to="/captain-signup" className="text-blue-600">
              Register as a Captain
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to="/login"
          className="flex w-full bg-orange-500 text-white justify-center items-center py-2 rounded font-semibold"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
