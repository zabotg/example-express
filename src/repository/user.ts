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

// const createTable = ( conn: any ) => {
 
// 	const sql = "CREATE TABLE IF NOT EXISTS Clientes (\n"+
// 				"ID int NOT NULL AUTO_INCREMENT,\n"+
// 				"Nome varchar(150) NOT NULL,\n"+
// 				"CPF char(11) NOT NULL,\n"+
// 				"PRIMARY KEY (ID)\n"+
// 				");";
	
// 	conn.query(sql, function (error: any){
// 		if(error) return console.log(error);
// 		console.log('criou a tabela!');
// 	});
// 	conn.end();
// }
