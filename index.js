const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
require('dotenv/config');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', './view');
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')))

require('./routes')(app);

const connect = require('./database/connect')
const username = process.env.USERNAME || ''
const password = process.env.PASSWORD || ''
const cluster = process.env.CLUSTER || ''
const databaseName = process.env.DATABASE_NAME || ''
const url = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${databaseName}?retryWrites=true&w=majority`

try {
    connect(url)
} catch (error) {
    console.error(error);
}

const PORT = process.env.PORT || 8080
server.listen(PORT, () => console.log('listen port ', PORT));