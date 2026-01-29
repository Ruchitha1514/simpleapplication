import { createContext, useContext, useEffect, useState } from "react";
import { fetchPosts, fetchUsers } from "../api/api";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchPosts().then(setPosts);
    fetchUsers().then(setUsers);
  }, []);

  return (
    <AppContext.Provider value={{ posts, users }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
