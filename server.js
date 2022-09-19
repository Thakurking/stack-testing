const express = require("express");
const path = require('path');
const app = express();
const axios = require('axios');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const elements = await axios.get('http://localhost:5000/stack/display');
  console.log(elements)
  return res.render("stack", { data: elements.data});
});


const stackRoutes = require('./routes/stack.routes');

app.use('/stack', stackRoutes);

const PORT = 5000;

const server = app.listen(PORT, () => {
  console.log(`Server is Running on PORT ${PORT}`);
});

process.on("uncaughtException", (err, origin) => {
  console.log(err);
  console.log(origin);
  server.close(1);
});

module.exports = server;
