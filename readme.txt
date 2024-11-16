Food Order Website
This is a food-ordering web application that allows users to register, sign in, and interact with the platform. The backend is implemented using PHP and a MySQL database, while the frontend utilizes React for a responsive and modern user interface.

Project Structure
The project contains the following main directories:

frontend: Contains all React components for the user interface.
index.js: Sets up the React application with routes for HomePage, Register, and SignIn.
landing_page/: Contains components like Navbar, Footer, HomePage, Register, and SignIn.
backend: Contains PHP files for handling requests.
register.php: Handles user registration by saving user details into the database.
sign_in.php: Verifies user login details by checking email and password.


Setup and Installation
Prerequisites
Install XAMPP (for PHP and MySQL server) and ensure it is running on localhost.
Install Node.js and npm for running the React frontend.
Configure your database and replace your_username and your_password in register.php and sign_in.php with actual credentials.

Step-by-Step Guide
Database Setup:

Open phpMyAdmin or any MySQL client.
Create a database named food-order-website.
In the database, create a table named users with the following columns:
sql
Copy code
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    address VARCHAR(255),
    phone VARCHAR(15)
);
Configure Backend:

Place register.php and sign_in.php in the XAMPP htdocs directory, following a path like C:\xampp\htdocs\food-order-website\backend\.
Update register.php and sign_in.php with the correct database credentials.
Configure Frontend:

Navigate to the frontend folder.
Run npm install to install dependencies.
Update the fetch URLs in Register.js and Signin.js components to point to your backend endpoints:
javascript
Copy code
const response = await fetch("http://localhost/food-order-website/backend/register.php", {
// And similarly for sign_in.php
Run Frontend:

Start the React app with:
bash
Copy code
npm start
Access Application:

Open http://localhost:3000 in your browser to access the frontend.
Usage
Register:

Navigate to /register or click the "Register" link in the Navbar.
Fill out the form fields, including Name, Email, Password, Address, and Phone.
Submit the form to save your data to the backend. You should see a success message if registration is successful.
Sign In:

Navigate to /sign-in or click the "Sign in" link in the Navbar.
Enter the same Email and Password used during registration.
If the credentials match, you will see a success message. Otherwise, an error message will appear.
API Reference
Register (register.php)
URL: /food-order-website/backend/register.php
Method: POST
Request Body:
json
Copy code
{
  "name": "string",
  "email": "string",
  "password": "string",
  "address": "string",
  "phone": "string"
}
Response:
200 OK if registration is successful.
400 Bad Request if any required field is missing.
JSON message indicating success or error details.
Sign In (sign_in.php)
URL: /food-order-website/backend/sign_in.php
Method: POST
Request Body:
json
Copy code
{
  "email": "string",
  "password": "string"
}
Response:
200 OK if login is successful.
400 Bad Request for invalid credentials.
JSON message indicating login success or failure.
Notes
Ensure your PHP files are correctly set up to prevent direct access without a POST request.
Passwords are securely stored using password_hash in PHP and verified using password_verify during login.
Ensure both the frontend and backend servers are running simultaneously for full functionality.
Future Improvements
Implement JWT tokens for secure sessions.
Add a user dashboard post-login.
Enhance the UI/UX with additional design improvements.
License
This project is open-source. Feel free to contribute and improve upon it!