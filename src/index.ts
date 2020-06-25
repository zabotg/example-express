import server from './server';
require('dotenv').config();

server.listen(3000, () => {
	console.log(`[SERVER] Running at http://localhost:3000`);
});