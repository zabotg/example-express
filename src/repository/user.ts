import conn from "../infrastructure/database-factory";
import { User } from "@src/entities/user";

export const insertUser = (user: User): any => {
	try {
		conn.query(`INSERT INTO Clientes(Nome, CPF) VALUES('${user.fullName}','${user.documentNumber}')`);
		conn.commit();
	} catch (err) {
		console.log(`User not inserted in DB!, ${err}`);
	}
};