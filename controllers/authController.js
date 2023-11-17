
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/models');

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ message: 'Login failed' });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: 'Login failed' });
    }

    const token = jwt.sign({ userId: user.id }, "464asdas4das68d4as", { expiresIn: '24h' });
    return res.json({ token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Login failed', error: err });
  }
};

module.exports = {
  login,
};