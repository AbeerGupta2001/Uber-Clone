import http from 'http'
import app from './app.js'
import connectDb from './db/db.js';

const port = process.env.PORT || 3000
const server = http.createServer(app);

server.listen(port,()=>{
    connectDb();
    console.log("Server listening")
})