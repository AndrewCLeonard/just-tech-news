const router = require("express").Router();
const { Comment } = require("../../models");

/**
 * GET all comments: /api/comments
 */
router.get("/", (req, res) => {
	console.log("============ GET ALL COMMENTS ============");
	Comment.findAll()
		.then((dbCommentData) => res.json(dbCommentData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

/**
 * POST new comment: /api/comments
 */
router.post("/", (req, res) => {
	// expects => {comment_text: "This is the comment", user_id: 1, post_id: 2}
	// check the session
	if (req.session) {
		Comment.create({
			comment_text: req.body.comment_text,
			user_id: req.session.user_id,
			// use the id from the session
			post_id: req.body.post_id,
			// post_id: <req className='body post'></req>,
		})
			.then((dbCommentData) => res.json(dbCommentData))
			.catch((err) => {
				console.log(err);
				res.status(400).json(err);
			});
	}
});

/**
 * DELET a comment: /:id
 */
router.delete("/:id", (req, res) => {
	if (req.session) {
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
	}
});

module.exports = router;
