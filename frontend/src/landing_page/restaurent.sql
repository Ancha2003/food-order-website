CREATE TABLE restaurants (
    id INT AUTO_INCREMENT PRIMARY KEY,
    restaurantName VARCHAR(255) NOT NULL,
    ownerName VARCHAR(255) NOT NULL,
    pocDesignation VARCHAR(255) NOT NULL,
    ownerEmail VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    address2 VARCHAR(255),
    city VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    zip VARCHAR(10) NOT NULL,
    agreement TINYINT(1) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
