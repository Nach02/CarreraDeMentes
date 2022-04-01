const {GameRoom, Users, Question} = require('../db.js');

exports.createBDGameRoom = async ({
	name,
	usersAmount,
	questionAmout,
	public_,
	email,
	idUser,
}) => {
	try {
		const data = await GameRoom.create({
			name,
			usersAmount,
			questionAmout,
			public_,
			email,
		});
		data.addUser(idUser);
		return [true, 'Sala creada: ' + name];
	} catch (e) {
		console.log('Error al crear la sala: ', e);
		return e;
	}
};

// actializamos y agregamos un nuevo usuario a la sala
exports.updateAddBDGameRoom = async ({idGameRoom, idUser}) => {
	try {
		const data = await GameRoom.findByPk(idGameRoom, {
			include: [
				{
					model: Users,
					attributes: ['id'],
				},
			],
		});

		if (!data) return [false, 'Sale no encontrada'];

		const {users, usersAmount} = data;

		if (users.length < usersAmount) {
			await data.addUsers(idUser);
			return [true, 'Usuario agregado exitosamente'];
		} else if (users.length >= usersAmount) {
			return [false, 'La sala ya esta llena'];
		}
	} catch (e) {
		console.log(e);
		return e;
	}
};

//buscar todas las salas
exports.seachAllBDGameRoom = async (idRoom) => {
	try {
		if (idRoom) {
			const data = await GameRoom.findOne({
				where: {id: idRoom},
				include: [
					{
						model: Users,
						attributes: ['id', 'name', 'email'],
					},
				],
			});

			return data;
		} else {
			const data = await GameRoom.findAll({
				include: [
					{
						model: Users,
						attributes: ['id', 'name', 'email'],
					},
				],
			});

			return data;
		}
	} catch (e) {
		console.log('error:', e);
		return e;
	}
};

// Eliminar una sala por su id
exports.deletByIdGameRoom = async ({id}) => {
	try {
		const eliminado = await GameRoom.destroy({where: {id}});
		if (eliminado > 0) {
			return [true, 'Salas eliminada'];
		} else {
			return [false, 'No se encotro la sala a eliminar'];
		}
		console.log(dt);
	} catch (e) {
		return e;
	}
};

// Eliminar un usuario de la sala
exports.updateDeleteBDGameRoom = async ({idGameRoom, email, idUserDelet}) => {
	try {
		const data = await GameRoom.findByPk(idGameRoom, {
			include: [
				{
					model: Users,
					attributes: ['id'],
				},
			],
		});

		if (!data) return [false, 'Sale no encontrada'];

		const {email: creator, users} = data;

		if (creator === email) {
			data.removeUser(idUserDelet);
			return [true, 'Usuario eliminado'];
		} else {
			return [false, 'Solo el creador de la sala puede aliminar un usuario'];
		}
	} catch (e) {
		console.log('Error al eliminar un usuario: ', e);
		return e;
	}
};
