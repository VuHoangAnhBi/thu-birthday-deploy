const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uuid = require('uuid').v4;

// const moment = require('moment-timezone');
// const dateThailand = moment.tz(Date.now(), "Asia/Bangkok");

const homeModel = Schema({
    dateView: {type: String}
})

const wishModel = Schema({
    dateView: {type: String}
})

const loveModel = Schema({
    dateView: {type: String}
})

module.exports = {
    homeModel : mongoose.model('home', homeModel),
    wishModel : mongoose.model('wish', wishModel),
    loveModel: mongoose.model('love', loveModel)
}