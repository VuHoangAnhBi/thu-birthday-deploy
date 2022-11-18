const mongoose = require('mongoose');

const connect = async (url) => {
    mongoose.connect(url)
        .then(() => console.log('connect successfully'))
        .catch(console.error)
}

module.exports = connect;