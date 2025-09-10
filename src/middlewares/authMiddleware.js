const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; // keyinchalik DB dan userni olib kelamiz
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Token noto‘g‘ri yoki yaroqsiz' });
    }
  }

  if (!token) {
    return res.status(401).json({ message: 'Token yo‘q, access taqiqlangan' });
  }
};

module.exports = { protect };
