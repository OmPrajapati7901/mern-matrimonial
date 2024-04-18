const User = require("../Models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { Request, Response, NextFunction } = require('express');

module.exports.userVerification = (req, res, next) => {
  const token = req.cookies.token
  if (!token) {
    return res.status(401).json({ message: "unauthorizedhrgfnbfgbnfg" });
    // return res.json({ status: false })
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.userId = decoded.email;
    // console.log("sdcasdcsdcas  "+decoded.email)
    // res.json({ status: true, user: decoded.email })
    next();
  } catch (error) {
    return res.status(401).json({ message: error });
  }

 
}


 // jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
  //   if (err) {
  //    return res.json({ status: false })
  //   } else {
  //     const user = await User.findById(data.id)
  //     if (user) return res.json({ status: true, user: user.username })
  //     else return res.json({ status: false })
  //   }
  // });