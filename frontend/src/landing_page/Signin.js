import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

function Signin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  
    try {
      const response = await fetch("http://localhost:8080/food-order-website/backend/sign_in.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      console.log("Server Response:", data);
  
      if (response.ok) {
        alert(data.message);
        navigate("/home");
      } else {
        setError(data.message || "Sign in failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred while signing in.");
    }
  };
  

  return (
    <div className="sign-in-container">
      <h2>Sign In</h2>
      {error && <div className="error-message">{error}</div>}
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Signin;
