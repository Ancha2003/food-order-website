import React, { useState } from "react";
import "./Register.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  
    try {
      const response = await fetch("http://localhost:8080/food-order-website/frontend/src/landing_page/register.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      // Display connection message if available
      if (data.connection) {
        console.log(data.connection); // Connection successful message
      }
  
      if (data.form) {
        setError(data.form.message || "Registration failed.");
      } else {
        alert("Registration successful! An SMS has been sent to your number.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(" Ⓡⓔⓖⓘⓢⓣⓔⓓ.");
    }
  };
  
  return (
    <div className="register-container">
      <h2>Register</h2>
      {error && <div className="error-message">{error}</div>}
      <form className="register-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>
        <label>
          Phone:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <button type="submit" name="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
