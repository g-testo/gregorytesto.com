import path from 'path';
import { Server } from 'http';
import Express from 'express';
var axios = require('axios');

const app = new Express();
const server = new Server(app);

// use ejs templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'static')));

// universal routing and rendering
app.get('*', (req, res) => {
  let markup = '';
  let status = 200;
  return res.status(status).render('index', { markup });
});

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';

server.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }

  return console.info(
    `Server running on http://localhost:${port}`);
});
