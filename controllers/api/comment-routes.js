// MY FILE
const router = require("express").Router();
const { Comment } = require("../../models");

// GET all comments: /api/comments
router.get("/", (req, res) => {
	console.log("============ GET ALL COMMENTS ============");
	// ERROR: Comment.findAll({
	Comment.findAll()
		// ERROR: NOT REQUIRED
		// attributes: ["id", "post_id", "comment_text", "user_id"],
		// order: [["created_at", "DESC"]],
		.then((dbCommentData) => res.json(dbCommentData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// POST new comment: /api/comments
router.post("/", (req, res) => {
	// expects => {comment_text: "This is the comment", user_id: 1, post_id: 2}
	Comment.create({
		comment_text: req.body.comment_text,
		user_id: req.session.user_id,
		post_id: req.body.post_id,
	})
		.then((dbCommentData) => res.json(dbCommentData))
		.catch((err) => {
			console.log(err);
			res.status(400).json(err);
		});
});

// DELETE a comment: /api/comments/:id
router.delete("/:id", (req, res) => {
	Comment.destroy({
		where: {
			id: req.params.id,
		},
	})
		.then((dbCommentData) => {
			if (!dbCommentData) {
				res.status(404).json({ message: "No comment found with this id!" });
				return;
			}
			res.json(dbCommentData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// Export stays at end of file
module.exports = router;
