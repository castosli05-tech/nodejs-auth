const http = require('http');
const app = require('./app');
const connectDB = require('./config/db');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

// Databasega ulanish
connectDB();

// Serverni ishga tushirish
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`✅ Server http://localhost:${PORT} -portda ishlayapti...`);
});
