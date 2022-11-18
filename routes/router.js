const router = require('express').Router();
const routesConfig = require('./config');
const {homeModel, wishModel, loveModel} = require('../database/model');

const moment = require('moment')

const timezone = 7 * 60 * 60;
const getTimeNow = (name) => {
    const d = moment(Date.now() + timezone).format('DD-MM-YYYY  HH:mm:ss');
    console.log(`insert ${name} at: `, d)
    return d
}

router.post(routesConfig.wish, async (req, res) => {
    const wish = new wishModel({
        dateView: getTimeNow('wish')
    })
    await wish.save();
    return res.sendStatus(200);
})

router.post(routesConfig.love, async (req, res) => {
    const love = new loveModel({
        dateView: getTimeNow('love')
    })
    await love.save();
    return res.sendStatus(200);
})

// render view
router.get('/', async(req, res) => {
    const home = new homeModel({
        dateView: getTimeNow('home')
    })
    await home.save()
    return res.status(200).render('./index.ejs');
})

module.exports = router;