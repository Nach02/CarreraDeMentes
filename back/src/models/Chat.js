const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('chat', {
		userUUID: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
		},
		message: {
			type: DataTypes.STRING,
		},
		time: {
			type: DataTypes.DATE,
			validate: {
				isDate: true, 
			}
		},
		gameRoomId: {
			type: DataTypes.UUID,
		},
	});
};
