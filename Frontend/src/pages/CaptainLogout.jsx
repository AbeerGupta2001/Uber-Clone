import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CaptainLogout = () => {
  const token = localStorage.getItem("captainToken");
  const navigate = useNavigate();
  const logout = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/captains/logout`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status === 200) {
      localStorage.removeItem("captainToken");
      navigate("/captain-login");
    }
  };
  logout();
  return <div></div>;
};

export default CaptainLogout;
