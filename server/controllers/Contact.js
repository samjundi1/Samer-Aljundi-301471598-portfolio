const Contact = require('../models/Contact');

// Get all contacts
exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get contact by ID
exports.getContactById = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) return res.status(404).json({ message: 'Contact not found' });
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new contact
exports.createContact = async (req, res) => {
    const { firstname, lastname, email } = req.body;
    if (!firstname || !lastname || !email) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    try {
        const newContact = new Contact({ firstname, lastname, email });
        await newContact.save();
        res.status(201).json(newContact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a contact
exports.updateContact = async (req, res) => {
    const { firstname, lastname, email } = req.body;
    try {
        const updatedContact = await Contact.findByIdAndUpdate(req.params.id, { firstname, lastname, email }, { new: true });
        if (!updatedContact) return res.status(404).json({ message: 'Contact not found' });
        res.status(200).json(updatedContact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a contact
exports.deleteContact = async (req, res) => {
    try {
        const deletedContact = await Contact.findByIdAndDelete(req.params.id);
        if (!deletedContact) return res.status(404).json({ message: 'Contact not found' });
        res.status(200).json({ message: 'Contact deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete all contacts
exports.deleteAllContacts = async (req, res) => {
    try {
        await Contact.deleteMany();
        res.status(200).json({ message: 'All contacts deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
