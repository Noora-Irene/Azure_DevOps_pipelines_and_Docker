const express = require('express');
const indexController = require('../controllers/certificate.controller');
const router = express.Router();

router.get('/', indexController.getAllCertificates);

module.exports = router;