const express = require('express');
const router  = express.Router();
const detailCtrl = require('../controllers/detailControllers');

//Welcome Page
router.get('/', detailCtrl.displayMessage)

//CREATE detail entry
router.post('/info', detailCtrl.createDetails)

//READ
//read multiple entries
router.get('/info', detailCtrl.getAllDetails)

//read single
router.get('/info/:id', detailCtrl.getSingleDetails)

//UPDATE
router.put('/info/:id', detailCtrl.updateDetails)

//DEL
router.delete('/info/:id', detailCtrl.deleteDetails)

module.exports = router;