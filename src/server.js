
const express = require('express')
const app = express()
const port = 3000

const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('greenboy', 'root', '', {
  host: 'localhost',
  dialect: "mysql"
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

connectDB();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})