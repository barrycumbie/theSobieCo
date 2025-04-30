// 🌵 Nevaeh & Marvin 4.30.2025 iss#26 LAYOUT#2

//we could not get email to work so we removed it for now (R.I.P. email)
const express = require('express');
const router = express.Router();

// GET /register → show the registration form
router.get('/register', (req, res) => {
  res.render('sobie-register', { pageTitle: 'SOBIE Registration' });
});

// POST /register → process the form
router.post('/register', async (req, res) => {
  const formData = req.body;

  // -- Email logic removed --

  const location = { lat: 29.6436, lng: -82.3549 };

  res.render('confirmation', {
    pageTitle: 'Registration Confirmed',
    formData: formData,
    location: location
  });
});

module.exports = router;
