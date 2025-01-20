import React, { createContext, useState } from "react";

export const userDataContext = createContext();
const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
    userName: {
      firstName: "",
      lastName: "",
    },
  });
  return (
    <div>
      <userDataContext.Provider value={[user, setUser]}>{children}</userDataContext.Provider>
      {children}
    </div>
  );
};

export default UserContext;
