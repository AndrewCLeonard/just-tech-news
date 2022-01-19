const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const path = require("path"); // module built into the Node.js API that provides utilities for working with file and directory paths. It ultimately makes working with our file system a little more predictable, especially when we work with production environments such as Heroku.
const app = express();
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

const PORT = process.env.PORT || 3001;

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); //The express.static() method is a built-in Express.js middleware function that can take all of the contents of a folder and serve them as static assets. This is useful for front-end specific files like images, style sheets, and JavaScript files.

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});
