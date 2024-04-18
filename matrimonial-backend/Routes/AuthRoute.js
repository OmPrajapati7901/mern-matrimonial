const { Signup, Login, Verify } = require('../Controllers/AuthController')
const { userVerification } = require('../Middlewares/AuthMiddleware')
const UserProfile = require('../Models/UserProfile')
const router = require('express').Router()
const User = require("../Models/UserModel");

router.post('/signup', Signup)
router.post('/login', Login)
// router.post('/',userVerification)
router.post('/',userVerification, Verify)
  
// router.post('/',userVerification, async (req, res) => {
//     const userid = req.userId
//     const user = await User.findOne({ userid });
//     res.status(200).send({ userId: req.userId });
//     console.log("user", user)
//     console.log("userid", userid)
//   });
  



module.exports = router