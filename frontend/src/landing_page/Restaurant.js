import React, { useState } from "react";
import "./restaurant.css";

function RestaurantRegister() {
  const [formData, setFormData] = useState({
    restaurantName: "",
    ownerName: "",
    pocDesignation: "",
    ownerEmail: "",
    password: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    agreement: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  
    try {
      const response = await fetch(
        "http://localhost:8080/food-order-website/frontend/src/landing_page/restaurant.php", 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // Convert form data to JSON
        }
      );
  
      const data = await response.json();
  
      if (response.ok) {
        alert("Restaurant registration successful!");
      } else {
        setError(data.form ? data.form.message : "Registration failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Registration failed. Please try again.");
    }
  };
  

  return (
    <div className="register-container">
      <h3>Restaurant Partner Registration</h3>
      {error && <div className="error-message">{error}</div>}
      <form className="register-form" onSubmit={handleSubmit}>
        <div>
          <label>
            Restaurant Name:
            <input
              type="text"
              name="restaurantName"
              value={formData.restaurantName}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Owner's Name:
            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
          Restaurant shop license
            <input
              type="text"
              name="pocDesignation"
              value={formData.pocDesignation}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Owner's Email:
            <input
              type="email"
              name="ownerEmail"
              value={formData.ownerEmail}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Address 2:
            <input
              type="text"
              name="address2"
              value={formData.address2}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
        <label>
  State:
  <select
    name="state"
    value={formData.state}
    onChange={handleChange}
    required
  >
    <option value="">Choose...</option>
    <option value="Andhra Pradesh">Andhra Pradesh</option>
    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
    <option value="Assam">Assam</option>
    <option value="Bihar">Bihar</option>
    <option value="Chhattisgarh">Chhattisgarh</option>
    <option value="Goa">Goa</option>
    <option value="Gujarat">Gujarat</option>
    <option value="Haryana">Haryana</option>
    <option value="Himachal Pradesh">Himachal Pradesh</option>
    <option value="Jharkhand">Jharkhand</option>
    <option value="Karnataka">Karnataka</option>
    <option value="Kerala">Kerala</option>
    <option value="Madhya Pradesh">Madhya Pradesh</option>
    <option value="Maharashtra">Maharashtra</option>
    <option value="Manipur">Manipur</option>
    <option value="Meghalaya">Meghalaya</option>
    <option value="Mizoram">Mizoram</option>
    <option value="Nagaland">Nagaland</option>
    <option value="Odisha">Odisha</option>
    <option value="Punjab">Punjab</option>
    <option value="Rajasthan">Rajasthan</option>
    <option value="Sikkim">Sikkim</option>
    <option value="Tamil Nadu">Tamil Nadu</option>
    <option value="Telangana">Telangana</option>
    <option value="Tripura">Tripura</option>
    <option value="Uttar Pradesh">Uttar Pradesh</option>
    <option value="Uttarakhand">Uttarakhand</option>
    <option value="West Bengal">West Bengal</option>
    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
    <option value="Chandigarh">Chandigarh</option>
    <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
    <option value="Delhi">Delhi</option>
    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
    <option value="Ladakh">Ladakh</option>
    <option value="Lakshadweep">Lakshadweep</option>
    <option value="Puducherry">Puducherry</option>
  </select>
</label>

        </div>
        <div>
          <label>
            Zip:
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="agreement"
              checked={formData.agreement}
              onChange={handleChange}
            />
            Check me out
          </label>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RestaurantRegister;
