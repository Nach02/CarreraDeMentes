const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('users', {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: false,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false,
/* 			validate: {
				isAlpha: true,
				len: [2,12], 
			} */
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true
			}
		},
		currentAvatar: {
			//ID de avatar
			type: DataTypes.INTEGER,//defaultValue: un avatar para cuando se logue con face o google
			validate: {
				isInt: true,
				min: 1
			}
		},
		avatarStock: {
			type: DataTypes.INTEGER,
			validate: {
				isInt: true,
			}
		},
		coins: {
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0,
			validate: {
				isInt: true,
			}
		},
		experiencePoints: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			validate: {
				isInt: true,
				min: 0
			}
		},
		level: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			validate: {
				isInt: true,
			}
		},
		wins: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			validate: {
				isInt: true,
			}
		},
		friendId: {
			//Id de amigos
			type: DataTypes.INTEGER,
			validate: {
				isInt: true,
			}
		},
		host: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		guest: {
			type: DataTypes.BOOLEAN,
			defaultValue: true,
		},
	});
};
