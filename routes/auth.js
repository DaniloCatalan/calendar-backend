// Rutas de Usuarios / Auth
// host + api/auth

const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { createUser, loginUser, renewToken } = require('../controllers/auth');

const router = Router();

router.post(
  '/new',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
    check(
      'password',
      'Password is required and must be more than 6 characters long'
    ).isLength({ min: 6 }),
    validateFields,
  ],
  createUser
);

router.post(
  '/',
  [
    check('email', 'Email is required').isEmail(),
    check(
      'password',
      'Password is required and must be more than 6 characters long'
    ).isLength({ min: 6 }),
    validateFields,
  ],
  loginUser
);

router.get('/renew', renewToken);

module.exports = router;
