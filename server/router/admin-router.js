const express = require('express');
const router=express.Router();
const authController=require('../controllers/admin-controller');
router.route('/').get(authController.home);
router.route('/register').post(authController.register);
module.exports = router;