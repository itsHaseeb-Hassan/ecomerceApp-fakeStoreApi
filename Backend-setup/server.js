import jsonServer from 'json-server';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const server = jsonServer.create();
const router = jsonServer.router('../db.json');

server.use(router);

// Use PORT from environment variables or default to 3000
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});