require('dotenv').config(); //read .env files
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

//Set public folder as root
app.use(express.static('public'));

//Allow front-end access to node modules folder
app.use('/scripts', express.static(`${__dirname}/node_modules`));

// Redirect all traffic to index.html
app.use((req, res) => res.sendFile(`${__dirname}/public/index.html`));

//Listen for http requests on port 3000
app.listen(port, () => {
  console.log('listening on %d', port);
});
