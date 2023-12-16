const {User} = require('../DB_connection');

const login = async (req,res) => {
    try {
        const {email, password} = req.query;
        if (!email || !password) {
            res.status(400).send("faltan datos");
        } else {
           const userFound = await User.findOne({where: {email: email}});
           if(!userFound) {
            res.status(404).send("Usuario no encontrado");
           } else {
            if(userFound.password !== password) {
                res.status(403).send("Contraseña incorrecta")

            } else {
                res.json({
                    access: true
                 })
            }
           }
        }
    } catch (error) {
        
        res.status(500).send(error.message)
    }
}

module.exports = {login};