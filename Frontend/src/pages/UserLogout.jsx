import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const logout = async () => {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if(response.status === 200){
      localStorage.removeItem("token");
      navigate("/login");
    }
  };
  logout();
  return <div></div>;
};

export default UserLogout;
