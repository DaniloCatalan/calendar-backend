/**
  Event routes
  hots + /api/events
 */
const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { check } = require('express-validator');

const {
  createEvent,
  deleteEvent,
  getEvents,
  updateEvent,
} = require('../controllers/events');
const { validateFields } = require('../middlewares/validate-fields');
const { isDate } = require('../helpers/isDate');
const router = Router();

// validate all routes
router.use(validarJWT);

router.get('/', getEvents);

router.post(
  '/',
  [
    check('title', 'The title field is required').not().isEmpty(),
    check('start', 'Start Date is required').custom(isDate),
    check('end', 'End Date is required').custom(isDate),
    validateFields,
  ],
  createEvent
);

router.put('/:id', updateEvent);

router.delete('/:id', deleteEvent);

module.exports = router;
