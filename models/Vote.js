// MY FILE
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Vote extends Model {}

Vote.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		// inclued user_id and post_id to track ownership of posts
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
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "vote",
	}
);

module.exports = Vote;
