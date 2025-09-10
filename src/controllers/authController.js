// User model va token generatorni keyinchalik ulaymiz
const registerUser = async (req, res) => {
  res.json({ message: 'Register controller ishlayapti' });
};

const loginUser = async (req, res) => {
  res.json({ message: 'Login controller ishlayapti' });
};

const getMe = async (req, res) => {
  res.json({ message: 'Get Me controller ishlayapti' });
};

module.exports = { registerUser, loginUser, getMe };
