const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // Add more fields for user details (name, email, phone, etc.)
});

module.exports = mongoose.model('User', userSchema);
