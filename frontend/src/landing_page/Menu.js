import React, { useState } from "react";
import "./menu.css";

function Menu() {
  const [menuData, setMenuData] = useState({
    itemName: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMenuData({
      ...menuData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(
        "http://localhost:8080/food-order-website/frontend/src/landing_page/menu.php", 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(menuData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Menu item added successfully!");
        setMenuData({
          itemName: "",
          price: "",
          description: "",
          category: "",
          image: "",
        });
      } else {
        setError(data.form ? data.form.message : "Failed to add menu item.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Failed to add menu item. Please try again.");
    }
  };

  return (
    <div className="menu-container">
      <h3>Add Menu Item</h3>
      {error && <div className="error-message">{error}</div>}
      <form className="menu-form" onSubmit={handleSubmit}>
        <div>
          <label>
            Item Name:
            <input
              type="text"
              name="itemName"
              value={menuData.itemName}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={menuData.price}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea
              name="description"
              value={menuData.description}
              onChange={handleChange}
              required
            ></textarea>
          </label>
        </div>
        <div>
          <label>
            Category:
            <select
              name="category"
              value={menuData.category}
              onChange={handleChange}
              required
            >
              <option value="">Choose...</option>
              <option value="Starter">Starter</option>
              <option value="Main Course">Main Course</option>
              <option value="Dessert">Dessert</option>
              <option value="Beverage">Beverage</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Image URL:
            <input
              type="url"
              name="image"
              value={menuData.image}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Add Menu Item</button>
      </form>
    </div>
  );
}

export default Menu;
