const {Favorite} = require('../DB_connection');

const postFav = async (req, res) => {
    try {
        const {name, origin, status, image, species, gender} = req.body;
        
        if(!name || !origin || !status || !image || !species || !gender) {
            res.status(401).send("Faltan datos");

        } else {
            const existingFavorite = await Favorite.findOne({ where: { name: name } });
            if (existingFavorite) {
                res.status(409).send("El favorito ya existe");
            } else {
            await Favorite.create({name, origin, status, image, species, gender});
            const all = await Favorite.findAll();
           
            res.json(all);
        }
    }

    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {postFav};