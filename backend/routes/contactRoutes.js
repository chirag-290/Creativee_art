const express = require('express');
const router = express.Router();
const {
  submitContact,
  getAllContacts,
  updateContactStatus
} = require('../controllers/contactController');

// Public routes
router.post('/', submitContact);

// Admin routes (will add authentication later)
router.get('/', getAllContacts);
router.put('/:id', updateContactStatus);

module.exports = router;


