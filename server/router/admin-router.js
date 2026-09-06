const express = require('express');
const router=express.Router();
const authController=require('../controllers/auth-controller');
const signupSchema=require('../validator/auth-validator');
const validate=require('../middleware/validator-middleware');
router.route('/').get(authController.home);
router.route('/login').post(validate(signupSchema), authController.login);
router.route('/register').post(validate(signupSchema), authController.register);
module.exports = router;