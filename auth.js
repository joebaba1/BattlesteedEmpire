const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) return res.status(401).send('Unauthorized');

  jwt.verify(token, 'secret-key', (err, decoded) => {
    if (err) return res.status(401).send('Invalid token');
    req.userId = decoded.userId;
    next();
  });
};

module.exports = authenticate;

