import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NewPostForm from "./pages/NewPost";
import { AuthProvider } from "./contexts/authContext";
import { PostProvider } from "./contexts/PostContext";
import LoginComponent from "./components/Login";
import RegisterComponent from "./components/Register";
import PrivateRoutes from "./components/PrivateRoutes";

export const UserContext = createContext();

const App = () => {
  const [currentUser, setCurrentUser] = useState("filippanorell");

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <PostProvider>
        <AuthProvider>
          <BrowserRouter>
            <Navbar isLoggedIn={true} username={currentUser} />
            <Routes>
              <Route element={<PrivateRoutes />} />
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginComponent />} />
              <Route path="/register" element={<RegisterComponent />} />
              <Route path="/newpost" element={<NewPostForm />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </PostProvider>
    </UserContext.Provider>
  );
};

export default App;
