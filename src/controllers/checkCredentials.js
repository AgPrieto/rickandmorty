const { User } = require('../DB_connection');

const checkCredentials = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      where: { email: email },
    });

    if (user) {
      // Si el usuario existe, verifica la contraseña
      if (user.password === password) {
        // Las credenciales son correctas
        return true;
      } else {
        // La contraseña es incorrecta
        return false;
      }
    } else {
      // El correo electrónico no existe
      return false;
    }
  } catch (error) {
    console.error("Error checking credentials in the database:", error);
    // Puedes personalizar el manejo de errores según tus necesidades
    throw new Error("Internal server error");
  }
};

module.exports = { checkCredentials };
