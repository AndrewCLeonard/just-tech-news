// MY FILE
const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Post, User, Comment, Vote } = require("../../models");

// ============================================================================================
// get all posts, including comments: /api/posts
// ============================================================================================
router.get("/", (req, res) => {
	console.log("\n \n \n \n \n \n========== INDEX.JS GET ALL POSTS ============");
	Post.findAll({
		// Query configuration
		attributes: ["id", "post_url", "title", "created_at", [sequelize.literal("(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)"), "vote_count"]],
		order: [["created_at", "DESC"]],
		// include Comment model:
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
		.then((dbPostData) => res.json(dbPostData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});
// ============================================================================================
// GET a single post: api/posts/1
// ============================================================================================
router.get("/:id", (req, res) => {
	Post.findOne({
		where: {
			id: req.params.id,
		},
		attributes: ["id", "post_url", "title", "created_at", [sequelize.literal("(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)"), "vote_count"]],
		include: [
			{
				// MY ERROR: OMMITTED THIS SECTION
				model: Comment,
				attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
				include: {
					model: User,
					attributes: ["username"],
				},
			},
			{
				// END OF ERROR
				model: User,
				attributes: ["username"],
			},
		],
	})
		.then((dbPostData) => {
			if (!dbPostData) {
				res.status(404).json({ message: "No post found with this id" });
				return;
			}
			res.json(dbPostData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// ============================================================================================
// POST a new post: /
// ============================================================================================
router.post("/", (req, res) => {
	// expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com', user_id: 1}
	Post.create({
		title: req.body.title,
		post_url: req.body.post_url,
		user_id: req.body.user_id,
	})
		.then((dbPostData) => res.json(dbPostData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// ============================================================================================
// PUT upvotes: /api/posts/upvote (needs to be above `/:id` route)
// ============================================================================================
router.put("/upvote", (req, res) => {
	// make sure the session exists first
	if (req.session) {
		// pass session id along with all destructured properties on req.body
		Post.upvote({ ...req.body, user_id: req.session.user_id }, { Vote, Comment, User })
			.then((updatedVoteData) => res.json(updatedVoteData))
			.catch((err) => {
				console.log(err);
				res.status(500).json(err);
			});
	}
});

// ============================================================================================
// PUT update a post: /api/posts/:id
// ============================================================================================
router.put("/:id", (req, res) => {
	// expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com', user_id: 1}

	Post.update(
		{
			title: req.body.title,
		},
		{
			where: {
				id: req.params.id,
			},
		}
	)
		.then((dbPostData) => {
			if (!dbPostData) {
				res.status(404).json({ message: "No post found with this id" });
				return;
			}
			res.json(dbPostData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// ============================================================================================
// DELETE a post
// ============================================================================================
router.delete("/:id", (req, res) => {
	console.log("id", req.params.id);
	Post.destroy({
		where: {
			id: req.params.id,
		},
	})
		.then((dbPostData) => {
			if (!dbPostData) {
				res.status(404).json({ message: "No post found with this id" });
				return;
			}
			res.json(dbPostData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
