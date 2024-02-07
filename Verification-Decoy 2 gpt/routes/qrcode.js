const express = require('express');
const router = express.Router();
const QRCode = require('qrcode');

// Generate QR Code
router.post('/generate', (req, res) => {
    const userData = req.session.user;
    const verificationUrl = `https://your-website.com/verify.html?username=${encodeURIComponent(userData.username)}&email=${encodeURIComponent(userData.email)}`;
    QRCode.toDataURL(verificationUrl, (err, qrCodeUrl) => {
        if (err) {
            res.status(500).send(err.message);
        } else {
            res.send({ qrCodeUrl });
        }
    });
});

module.exports = router;
