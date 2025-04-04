const http= require('http')

require('dotenv').config();
const app = require('./src/app');
const connectToDB = require('./src/db/db')
const server = http.createServer(app)

connectToDB()
server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});