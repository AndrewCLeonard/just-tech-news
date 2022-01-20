const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");

// requiring npm module connect session sequelize and passing the session.Store property
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// hash-based message authentication code

const sess = {
	secret: "Super secret secret", // secret property used to sign session cookie
	cookie: {},
	resave: false, // forces session to be saved back to session store. Recommended setting is false
	saveUninitialized: true, // session saved as part of the store
	store: new SequelizeStore({
		db: sequelize, // creates connection with database, set up session table, allow sequelize to save the session into the database
	}),
};

// call session middleware
app.use(session(sess));

const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// turn on routes
app.use(require("./controllers/"));
//
/*
???
using `app.use(routes);` gave me this error:
/Users/andrewleonard/codingBootcamp/bootcamp-module-13-just-tech-news/server.js:39
app.use(routes);
        ^

ReferenceError: routes is not defined
    at Object.<anonymous> (/Users/andrewleonard/codingBootcamp/bootcamp-module-13-just-tech-news/server.js:39:9)
*/
// app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});
