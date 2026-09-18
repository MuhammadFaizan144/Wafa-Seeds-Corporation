const express = require('express');
const router=express.Router();
const authController=require('../controllers/auth-controller');
const SignValidation=require('../validator/auth-validator');
const validate=require('../middleware/validator-middleware');
const authMiddleware=require('../middleware/auth-middleware')
router.route('/').get(authController.home);
router.route('/login').post(validate(SignValidation.loginSchema), authController.login);
router.route('/register').post(validate(SignValidation.signupSchema), authController.register);
router.route('/user').get(authMiddleware,authController.user)
module.exports = router;