// packaged group of API endpoints and prefixing them 
const router = require("express").Router();

const userRoutes = require("./user-routes.js");

// 
router.use("/users", userRoutes);

module.exports = router;
