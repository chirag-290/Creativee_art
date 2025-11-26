const Portfolio = require('../models/Portfolio');

// @desc    Get all portfolio items
// @route   GET /api/portfolio
// @access  Public
exports.getAllPortfolios = async (req, res) => {
  try {
    const portfolios = await Portfolio.find({ active: true }).sort({ createdAt: -1 });
    
    res.status(200).json({
      status: 'success',
      count: portfolios.length,
      data: portfolios
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Error fetching portfolio items',
      error: error.message
    });
  }
};

// @desc    Get single portfolio item
// @route   GET /api/portfolio/:id
// @access  Public
exports.getPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    
    if (!portfolio) {
      return res.status(404).json({
        status: 'error',
        message: 'Portfolio item not found'
      });
    }
    
    res.status(200).json({
      status: 'success',
      data: portfolio
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Error fetching portfolio item',
      error: error.message
    });
  }
};

// @desc    Create portfolio item (Admin only - for future)
// @route   POST /api/portfolio
// @access  Private/Admin
exports.createPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.create(req.body);
    
    res.status(201).json({
      status: 'success',
      data: portfolio
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Error creating portfolio item',
      error: error.message
    });
  }
};

// @desc    Update portfolio item (Admin only - for future)
// @route   PUT /api/portfolio/:id
// @access  Private/Admin
exports.updatePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!portfolio) {
      return res.status(404).json({
        status: 'error',
        message: 'Portfolio item not found'
      });
    }
    
    res.status(200).json({
      status: 'success',
      data: portfolio
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Error updating portfolio item',
      error: error.message
    });
  }
};

// @desc    Delete portfolio item (Admin only - for future)
// @route   DELETE /api/portfolio/:id
// @access  Private/Admin
exports.deletePortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findByIdAndDelete(req.params.id);
    
    if (!portfolio) {
      return res.status(404).json({
        status: 'error',
        message: 'Portfolio item not found'
      });
    }
    
    res.status(200).json({
      status: 'success',
      message: 'Portfolio item deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Error deleting portfolio item',
      error: error.message
    });
  }
};


