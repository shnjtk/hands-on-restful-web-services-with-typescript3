import * as fs from 'fs';
import * as https from 'https';
import app from './app';

const PORT = process.env.PORT;

const httpsOptions = {
  cert: fs.readFileSync('./config/cert.pem'),
  key: fs.readFileSync('./config/key.pem'),
};

https.createServer(httpsOptions, app).listen(PORT);
