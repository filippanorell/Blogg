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
  return (
    <AuthProvider>
      <PostProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<Home />} />
              <Route path="/newpost" element={<NewPostForm />} />
            </Route>
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/register" element={<RegisterComponent />} />
          </Routes>
        </BrowserRouter>
      </PostProvider>
    </AuthProvider>
  );
};

export default App;
