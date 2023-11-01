import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./container/Home";
import Login from "./components/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const User =
      localStorage.getItem("user") !== "undefined"
        ? JSON.parse(localStorage.getItem("user"))
        : localStorage.clear();

    if (!User) navigate("/login");
  }, []);
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
      <Routes>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/*" element={<Home />} />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
