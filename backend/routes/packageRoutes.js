const express = require('express');
const router = express.Router();
const {
  getAllPackages,
  getPackage,
  createPackage,
  updatePackage,
  deletePackage
} = require('../controllers/packageController');

// Public routes
router.get('/', getAllPackages);
router.get('/:id', getPackage);

// Admin routes (will add authentication later)
router.post('/', createPackage);
router.put('/:id', updatePackage);
router.delete('/:id', deletePackage);

module.exports = router;


