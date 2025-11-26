const Package = require('../models/Package');

// @desc    Get all packages
// @route   GET /api/packages
// @access  Public
exports.getAllPackages = async (req, res) => {
  try {
    const packages = await Package.find({ active: true }).sort({ price: 1 });
    
    res.status(200).json({
      status: 'success',
      count: packages.length,
      data: packages
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Error fetching packages',
      error: error.message
    });
  }
};

// @desc    Get single package
// @route   GET /api/packages/:id
// @access  Public
exports.getPackage = async (req, res) => {
  try {
    const package = await Package.findById(req.params.id);
    
    if (!package) {
      return res.status(404).json({
        status: 'error',
        message: 'Package not found'
      });
    }
    
    res.status(200).json({
      status: 'success',
      data: package
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Error fetching package',
      error: error.message
    });
  }
};

// @desc    Create package (Admin only - for future)
// @route   POST /api/packages
// @access  Private/Admin
exports.createPackage = async (req, res) => {
  try {
    const package = await Package.create(req.body);
    
    res.status(201).json({
      status: 'success',
      data: package
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Error creating package',
      error: error.message
    });
  }
};

// @desc    Update package (Admin only - for future)
// @route   PUT /api/packages/:id
// @access  Private/Admin
exports.updatePackage = async (req, res) => {
  try {
    const package = await Package.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!package) {
      return res.status(404).json({
        status: 'error',
        message: 'Package not found'
      });
    }
    
    res.status(200).json({
      status: 'success',
      data: package
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Error updating package',
      error: error.message
    });
  }
};

// @desc    Delete package (Admin only - for future)
// @route   DELETE /api/packages/:id
// @access  Private/Admin
exports.deletePackage = async (req, res) => {
  try {
    const package = await Package.findByIdAndDelete(req.params.id);
    
    if (!package) {
      return res.status(404).json({
        status: 'error',
        message: 'Package not found'
      });
    }
    
    res.status(200).json({
      status: 'success',
      message: 'Package deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Error deleting package',
      error: error.message
    });
  }
};


