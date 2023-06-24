# Login Backend Project

This project is a Node.js web application built with Express.js and Sequelize.

## Features

- Login functionality for customers and admin
- Customers can fill an order form
- Admin can view quantity, weight, and box count of orders for each customer

## Technologies Used

- Node.js
- Express.js
- Sequelize (MySQL, PostgreSQL, or other supported databases)
- HTML/CSS
- JavaScript

## Installation

1. Clone the repository: `git clone https://github.com/your/repository.git`
2. Install dependencies: `npm install`

## Configuration

1. Rename the `.env.example` file to `.env`.
2. Update the `.env` file with your database configuration, such as database name, username, password, etc.

## Usage

- Start the development server: `npm run dev`
- Access the application in your browser: `http://localhost:3000`

## Folder Structure

- `config`: Contains database configuration files
- `models`: Contains Sequelize models for database tables
- `routes`: Contains route handlers for different routes
- `views`: Contains HTML views using a templating engine (such as Handlebars or EJS)
- `public`: Contains static files (CSS, JavaScript, images, etc.)

## Database

This project uses Sequelize as an ORM (Object-Relational Mapping) tool to interact with the database. The models are defined in the `models` folder, and migrations can be found in the `migrations` folder. The database connection configuration can be found in the `config/database.js` file.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
