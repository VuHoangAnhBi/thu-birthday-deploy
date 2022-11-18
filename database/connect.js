const mongoose = require('mongoose');

const connect = async (url) => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('connect successfully'))
        .catch(console.error)
}

module.exports = connect;