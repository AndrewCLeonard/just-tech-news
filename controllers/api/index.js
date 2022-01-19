// packaged group of API endpoints and prefixing them
const router = require("express").Router();

// ERROR/OMISSION: DON'T NEED .JS AT END OF FILES
const userRoutes = require("./user-routes.js");
const postRoutes = require("./post-routes");
const commentRoutes = require("./comment-routes");

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
