// import the Sequelize constructor from the library https://sequelize.org/docs/v6/getting-started/#connecting-to-a-database
// const Sequelize = require("sequelize");
const { Sequelize } = require("sequelize");

require("dotenv").config();

// create connection to our database, pass in your MySQL information for username and password
let sequelize;

if (process.env.JAWSDB_URL) {
	sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
	sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
		host: "localhost",
		dialect: "mysql",
		port: 3306,
	});
}
// ?? test the connection https://sequelize.org/docs/v6/getting-started/#testing-the-connection
// 	try {
// 		await sequelize.authenticate();
// 		console.log("Connection has been established successfully.");
// 	} catch (error) {
// 		console.error("Unable to connect to the database:", error);
// 	}

module.exports = sequelize;
