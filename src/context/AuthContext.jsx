import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  const login = (email, password) => {
    const saved = JSON.parse(localStorage.getItem("registeredUser"));
    if (!saved || saved.email !== email || saved.password !== password) {
      alert("Invalid credentials");
      return;
    }
    localStorage.setItem("user", JSON.stringify(saved));
    setUser(saved);
  };

  const signup = (email, password) => {
    const user = { email, password };
    localStorage.setItem("registeredUser", JSON.stringify(user));
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
