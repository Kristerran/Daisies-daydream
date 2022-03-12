const router = require('express').Router();
const { User, Question, Options, Fig } = require('../models');
const fetch = require('node-fetch');
// GET virtuefig app
router.get('/', async (req, res) => {
  try {
    // Get all questions
    const questionData = await Question.findAll({
      include: Options
    });
    console.log(questionData[0].Options)
    const form = questionData.map((question) => question.get({ plain: true }));
    console.log(form[0].Options)
      res.render('about', {form, logged_in:req.session.logged_in});
 } catch (err) {
   res.status(500).json(err);
 }
});

// Get login Page
router.get('/booking', (req, res) => {
  res.render('booking');
});


// Get register page
router.get('/contact', async (req, res) => {
  try {
        res.render('contact');
  } catch (err) {
    res.status(500).json(err);
  }
});

 module.exports = router;
// Get the dashboard
 router.get('/portfolio', async (req, res) => {
  try {
      res.render('portfolio')
      }
   catch (err) {
    res.status(500).json(err);
  }
});