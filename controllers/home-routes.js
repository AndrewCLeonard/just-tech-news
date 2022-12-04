const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment, Vote } = require("../models");

// get all posts for homepage
router.get("/", (req, res) => {
	console.log("======================");
	console.log(`\nreq.session\n`);
	console.log(req.session);
	console.log(`\n\n`);
	Post.findAll({
		attributes: [
			"id", //
			"post_url",
			"title",
			"created_at",
			[sequelize.literal("(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)"), "vote_count"],
		],
		include: [
			{
				model: Comment,
				attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
				include: {
					model: User,
					attributes: ["username"],
				},
			},
			{
				model: User,
				attributes: ["username"],
			},
		],
	})
		.then((dbPostData) => {
			// loop over & map each Sequelize object into a serialized version
			const posts = dbPostData.map((post) => post.get({ plain: true }));
			res.render("homepage", { posts });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// login route, renders with hbs
router.get("/login", (req, res) => {
	// res.render("login"); // No variables needed, no second argument
	if (req.session.loggedIn) {
		console.log(`\n logged in already\n`);
		res.redirect("/");
		return;
	} else {
		console.log(`\n NOT logged in\n`);
	}

	res.render("login");
});

module.exports = router;
