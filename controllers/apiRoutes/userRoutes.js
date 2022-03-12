const router = require('express').Router();
const {User} = require('../../models');


//Get all users
router.get('/', async (req, res) => {
  try {
    const userData = await User.findAll({
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
})


//Get one user
router.get('/:id', async (req, res) => {
  try {

  } catch (err) {
    res.status(500).json(err);
  }
})


//Register a new user
router.post('/register', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    res.status(200).redirect('/login');
  } catch (err) {
    res.status(400).json(err);
  }
});


//Login user
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });

    if (!userData) {
      res
        .status(400)
        .render('login', { message: 'Incorrect username or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPass(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user = userData.id;
      req.session.logged_in = true;
      
      res.redirect('/');
    });

  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});


//Logout user
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204);
      res.redirect('/')
    });
  } else {
    res.status(404).end();
  }
});


module.exports = router;
