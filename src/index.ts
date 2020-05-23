import server from './server';
import connection from "../src/infrastructure/database-factory";

const createTable = ( conn: any ) => {
 
	const sql = "CREATE TABLE IF NOT EXISTS Clientes (\n"+
				"ID int NOT NULL AUTO_INCREMENT,\n"+
				"Nome varchar(150) NOT NULL,\n"+
				"CPF char(30) NOT NULL,\n"+
				"PRIMARY KEY (ID)\n"+
				");";
	
	conn.query(sql, (error: any) => {
		if(error) return console.log(error);
		console.log('criou a tabela!');
	});
}

const connectDatabase = () => {
	connection.connect(err => {
		if(err) return console.log(err);
	console.log('conectou!');
	createTable(connection);
	});
}

server.listen(3000, () => {
	console.log(`[SERVER] Running at http://localhost:3000`);
	connectDatabase();
});