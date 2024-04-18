const User = require("../Models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user.email);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports.Login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      // console.log(req.body, email)
      if(!email || !password ){
        return res.json({message:'All fields are required'})
      }
      const user = await User.findOne({ email });
      
      if(!user){
        return res.json({message:'Incorrect password or email' }) 
      }
      const auth = await bcrypt.compare(password,user.password)
      if (!auth) {
        return res.json({message:'Incorrect password or email' }) 
      }
       const token = createSecretToken(user.email);
       res.cookie("token", token, {
         withCredentials: true,
         httpOnly: false,
       });
       res.status(201).json({ message: "User logged in successfully", success: true });
       next()
    } catch (error) {
      console.error(error);
    }
  }

  module.exports.Verify = async (req, res) => {
    try {
      // const { email, password } = req.body;
      // if(!email || !password ){
      //   return res.json({message:'All fields are required'})
      // }
      // const user = await User.findOne({ email });
      // console.log("from  logibn user", user)
      // if(!user){
      //   return res.json({message:'Incorrect password or email' }) 
      // }
      // const auth = await bcrypt.compare(password,user.password)
      // if (!auth) {
      //   return res.json({message:'Incorrect password or email' }) 
      // }
      //  const token = createSecretToken(user.email);
      //  res.cookie("token", token, {
      //    withCredentials: true,
      //    httpOnly: false,
      //  });
      //  res.status(201).json({ message: "User logged in successfully", success: true });
      //  next()

      const email=req.userId
      // console.log(req.userId)
      const user = await User.findOne({ email });
      // console.log(user.username, user.email)
      res.status(200).send({ userId: user.email, username: user.username });
    } catch (error) {
      console.error(error);
    }
  }
