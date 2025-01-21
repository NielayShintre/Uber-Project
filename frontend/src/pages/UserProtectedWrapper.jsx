import React, {useState, useContext, useEffect } from "react";
import { userDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { user, setUser } = useContext(userDataContext);
  const [isloading, setIsLoading] = useState(true);
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  axios
    .get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        setUser(response.data.captain);
        setIsLoading(false);
      }
    })
    .catch((error) => {
      console.error("Profile error:", error.response?.data || error.message);
      localStorage.removeItem("token");
      navigate("/login");
    });
  if (isloading) {
    return <div>Loading...</div>;
  }
  return <div>{children}</div>;
};

export default UserProtectedWrapper;
