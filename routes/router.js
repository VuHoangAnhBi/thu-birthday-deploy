const router = require('express').Router();
const routesConfig = require('./config');
const {homeModel, wishModel, loveModel} = require('../database/model');

const moment = require('moment')

const getTimeNow = () => {
    return moment(Date.now()).format('DD-MM-YYYY  HH:mm:ss');
}

router.post(routesConfig.wish, async (req, res) => {
    const wish = new wishModel({
        dateView: getTimeNow()
    })
    await wish.save();
    return res.sendStatus(200);
})

router.post(routesConfig.love, async (req, res) => {
    const love = new loveModel({
        dateView: getTimeNow()
    })
    await love.save();
    return res.sendStatus(200);
})

// render view
router.get('/', async(req, res) => {
    const home = new homeModel({
        dateView: getTimeNow()
    })
    await home.save()
    return res.status(200).render('./index.ejs');
})

module.exports = router;