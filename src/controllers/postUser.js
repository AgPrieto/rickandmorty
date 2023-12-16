const { User } = require('../DB_connection');

const postUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password || email.trim() === "" || password.trim() === "") {
      res.status(400).send("Faltan datos");
    } else {
     
      const [user, created] = await User.findOrCreate({ where: { email, password } });
      res.status(200).send(user);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {postUser};
