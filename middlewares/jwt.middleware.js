const { expressjwt: ejwt } = require('express-jwt');

// instanciar o middleware de validação do JWT
const isAuthenticated = ejwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
  requestProperty: 'payload',
  getToken: getTokenFromHeaders
})

function getTokenFromHeaders (req) {
  if (req.headers.authorization){
    const [type, token] = req.headers.authorization.split(' ');
    if(type === "Bearer") {
      return token;
    }
  }
  return null;
}

module.exports = { isAuthenticated };