const Post = require("./Post");
const User = require("./User");
const Vote = require("./Vote");
const Comment = require("./Comment");

// create associations
User.hasMany(Post, {
	foreignKey: "user_id",
});

Post.belongsTo(User, {
	// this line not necessary judging from sequelize documentation: https://sequelize.org/docs/v6/core-concepts/assocs/#one-to-many-relationships
	// foreignKey: "user_id",
});

User.belongsToMany(Post, {
	through: Vote,
	as: "voted_posts",
	foreignKey: "user_id",
	// onDelete: "SET NULL",
});

Post.belongsToMany(User, {
	through: Vote,
	as: "voted_posts",
	foreignKey: "post_id",
	// onDelete: "SET NULL",
});

Vote.belongsTo(User, {
	foreignKey: "user_id",
});

Vote.belongsTo(Post, {
	foreignKey: "post_id",
});

User.hasMany(Vote, {
	foreignKey: "user_id",
});

Post.hasMany(Vote, {
	foreignKey: "post_id",
});

Comment.belongsTo(User, {
	foreignKey: "user_id",
});

Comment.belongsTo(Post, {
	foreignKey: "post_id",
});

User.hasMany(Comment, {
	foreignKey: "user_id",
});

Post.hasMany(Comment, {
	foreignKey: "post_id",
});

module.exports = { User, Post, Vote, Comment };
