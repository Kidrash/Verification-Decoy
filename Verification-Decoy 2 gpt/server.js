const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const QRCode = require('qrcode');
const User = require('./models/user');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));

mongoose.connect('mongodb://localhost:27017/qrgenerator', { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
