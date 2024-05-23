const express = require('express')
require('dotenv').config()
const db = require("./app/models/index.js");
const app = express()
const port = process.env.PORT

db.sequelize
.authenticate()
.then(() => console.log("Database connected ..."))
.catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})