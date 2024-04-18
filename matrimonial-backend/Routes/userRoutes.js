const { Signup, Login } = require('../Controllers/AuthController')
const { userVerification } = require('../Middlewares/AuthMiddleware')
const UserProfile = require('../Models/UserProfile')
const router = require('express').Router();

// console.log("vs")
// POST to register a new user
router.post('/register', userVerification , async (req, res) => {
    console.log("from register")
    try {
      const newUser = await UserProfile.create(req.body);
      return res.status(201).send(newUser);
    } catch (error) {
      return res.status(400).send(error);
    }
  });


  
  // GET to retrieve user profile
  router.get('/profile/:id', async (req, res) => {
    try {
      console.log(req.params.id)
      const user = await UserProfile.findById(req.params.id);
      res.status(200).send(user);
    } catch (error) {
      res.status(404).send({ message: 'User not found' });
    }
  });
  
  // PUT to update user profile
  router.put('/profile/:id', async (req, res) => {
    try {
      const updatedUser = await UserProfile.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).send(updatedUser);
    } catch (error) {
      res.status(400).send(error);
    }
  });
  

module.exports = router;