import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const [color, setColor] = useState("");
  const [plate, setPlate] = useState("");
  const [capacity, setCapacity] = useState(0);
  const [vehicleType, setVehicleType] = useState("");

  const { captain, setCaptain } = useContext(CaptainDataContext);

  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const newCaptain ={
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
      vehicle: {
        color: color,
        plate: plate,
        capacity: capacity,
        vehicleType: vehicleType.toLowerCase(),
      },
    };
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, newCaptain);
    if(response.status === 201){
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("captainToken", data.token);
      navigate('/captain-home')
    }
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    setColor("");
    setPlate("");
    setCapacity("");
    setVehicleType("");
  };
  return (
    <div className="p-4 h-screen flex flex-col justify-between">
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

          <div className="flex flex-col w-full justify-between">
            <h3>Vehicle Details</h3>
            <div className="flex w-full justify-between">
              <input
                className="bg-gray-100 rounded px-4 py-2 border w-[48%] text-lg placeholder:text-sm mb-3 focus:outline-none"
                value={color}
                type="text"
                required
                placeholder="color"
                onChange={(e) => setColor(e.target.value)}
              />
              <input
                className="bg-gray-100 rounded px-4 py-2 border w-[48%] text-lg placeholder:text-sm mb-3 focus:outline-none"
                value={plate}
                type="text"
                placeholder="plate"
                onChange={(e) => setPlate(e.target.value)}
              />
            </div>
            <div className="flex w-full justify-between">
              <input
                className="bg-gray-100 rounded px-4 py-2 border w-[48%] text-lg placeholder:text-sm mb-3 focus:outline-none"
                value={capacity}
                type="number"
                required
                placeholder="capacity"
                onChange={(e) => setCapacity(e.target.value)}
              />
              <select
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="bg-gray-100 rounded px-4 py-2 border w-[48%] text-sm placeholder:text-sm mb-3 focus:outline-none"
              >
                <option value="">Select Vehicle</option>
                <option value="Car">Car</option>
                <option value="Motorcycle">Motorcycle</option>
                <option value="Auto">Auto</option>
              </select>
            </div>
          </div>
          <button className="flex w-full bg-black text-white justify-center items-center py-2 rounded font-semibold mb-3">
            Create Captain Account
          </button>
          <p className="text-center">
            Already have a account?
            <Link to="/captain-login" className="text-blue-600">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CaptainSignup;
