import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CaptainLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captain-logout`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.removeItem("token");
          navigate("/captain-login");
        }
      })
      .catch((error) => {
        console.error("Logout error:", error);
        // Still remove token and redirect even if server call fails
        localStorage.removeItem("token");
        navigate("/captain-login");
      });
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default CaptainLogout;
