const Contact = require('../models/Contact');

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
exports.submitContact = async (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !service || !message) {
      return res.status(400).json({
        status: 'error',
        message: 'Please provide all required fields'
      });
    }
    
    const contact = await Contact.create({
      name,
      email,
      phone,
      service,
      message
    });
    
    // TODO: Send email notification to admin
    // TODO: Send confirmation email to user
    
    res.status(201).json({
      status: 'success',
      message: 'Thank you for contacting us! We will get back to you soon.',
      data: {
        id: contact._id
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Error submitting contact form',
      error: error.message
    });
  }
};

// @desc    Get all contacts (Admin only - for future)
// @route   GET /api/contact
// @access  Private/Admin
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    
    res.status(200).json({
      status: 'success',
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Error fetching contacts',
      error: error.message
    });
  }
};

// @desc    Update contact status (Admin only - for future)
// @route   PUT /api/contact/:id
// @access  Private/Admin
exports.updateContactStatus = async (req, res) => {
  try {
    const { status, notes } = req.body;
    
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status, notes },
      { new: true, runValidators: true }
    );
    
    if (!contact) {
      return res.status(404).json({
        status: 'error',
        message: 'Contact not found'
      });
    }
    
    res.status(200).json({
      status: 'success',
      data: contact
    });
  } catch (error) {
    res.status(400).json({
      status: 'error',
      message: 'Error updating contact',
      error: error.message
    });
  }
};


