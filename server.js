const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

const session = require('express-session');

// requiring npm module connect session sequelize and passing the session.Store property
const SequelizeStore = require('connect-session-sequelize'(session.Store);

// hash-based message authentication code

const sess = {
	secret: 'Super secret secret', // secret property used to sign session cookie
	cookie: {},
	resave: false, // forces session to be saved back to session store. Recommended setting is false
	saveUninitialized: true, // session saved as part of the store
	store: new SequelizeStore({ 
		db: sequelize // creates connection with database, set up session table, allow sequelize to save the session into the database
	})
};

// call session middleware
app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});
