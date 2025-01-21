import React, { createContext, useState } from "react";

export const userDataContext = createContext({
  user: {
    email: "",
    userName: {
      firstName: "",
      lastName: "",
    },
  },
  setUser: () => {},
});

const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
    fullName: {
      firstName: "",
      lastName: "",
    },
  });

  return (
    <userDataContext.Provider value={{ user, setUser }}>
      {children}
    </userDataContext.Provider>
  );
};

export default UserContext;
