const express = require('express');
const router = express.Router();
const {
  getAllPortfolios,
  getPortfolio,
  createPortfolio,
  updatePortfolio,
  deletePortfolio
} = require('../controllers/portfolioController');

// Public routes
router.get('/', getAllPortfolios);
router.get('/:id', getPortfolio);

// Admin routes (will add authentication later)
router.post('/', createPortfolio);
router.put('/:id', updatePortfolio);
router.delete('/:id', deletePortfolio);

module.exports = router;


