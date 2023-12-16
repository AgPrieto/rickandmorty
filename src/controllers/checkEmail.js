const { User } = require('../DB_connection');

const checkEmail = async (req, res) => {
  const { email } = req.query;

  try {
    const existingUser = await User.findOne({
      where: { email: email },
    });

    console.log("Existing User:", existingUser);

    if (existingUser) {
      return res.json(true);
    }

    return res.json(false);
  } catch (error) {
    console.error("Error checking email in the database:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { checkEmail };