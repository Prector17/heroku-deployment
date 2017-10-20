import * as path from 'path';
import * as express from 'express';

const clientPath = path.join(__dirname, '../client');

const app = express();

app.use(express.static(clientPath));

console.log(process.env.GREETING);// PROCESS IS A  that looks in vash for a variable

app.listen(3000, ()=>{
    console.log("Listening on port 3000");
});