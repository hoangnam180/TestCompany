/** @format */

import { useState, createContext, useEffect } from "react";
export const UserContext = createContext();
function WrapperProvider({ children }) {
  let retrievedObject = localStorage.getItem("parentValueKey") || {};
  const [movie, setMovie] = useState(JSON.parse(retrievedObject));
  useEffect(() => {
    localStorage.setItem("parentValueKey", JSON.stringify(movie));
  }, [movie, setMovie]);
  return (
    <UserContext.Provider value={{ movie, setMovie }}>
      {children}
    </UserContext.Provider>
  );
}
export default WrapperProvider;
