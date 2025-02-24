
const jwt = require("jsonwebtoken");
const SECRET_KEY = "jsonwebtoken";

const encrypt = (payload)=>{
  return jwt.sign(payload, SECRET_KEY, {expiresIn:"1h"});

}

const decrypt = (token) =>{
  try {
    return jwt.verify(token, SECRET_KEY);
  }catch (error){
    return null;
  }
}

module.exports ={
  encrypt,
  decrypt,
}