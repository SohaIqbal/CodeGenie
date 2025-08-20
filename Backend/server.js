import http from 'http';
import app from './src/app.js';
import connectToDB from './src/db/db.js';
import dotenv from 'dotenv';
dotenv.config();

const server = http.createServer(app)


connectToDB()
server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});