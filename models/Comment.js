const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			// references: {
			// 	model: "vote",
			// 	key: "id",
			// },
		},
		comment_text: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1],
			},
		},
		user_id: {
			type: DataTypes.INTEGER,
			// allowNull: false,
			references: {
				model: "user",
				key: "id",
			},
		},
		post_id: {
			type: DataTypes.INTEGER,
			// allowNull: false,
			references: {
				model: "post",
				key: "id",
			},
		},
	},
	{
		sequelize,
		freezeTableName: true,
		underscored: true,
		modelName: "comment", // HAD AS "comments", SHOULDN'T HAVE AN "S"
	}
);

module.exports = Comment;
