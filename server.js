const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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
