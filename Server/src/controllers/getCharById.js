const axios = require('axios');

exports.getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`https://rym2.up.railway.app/api/character/${id}?key=pi-agprieto`);

    if (response.data) {
      const data = response.data;
      res.json({
        id: data.id,
        name: data.name,
        status: data.status,
        species: data.species,
        origin: data.origin.name,
        image: data.image,
        gender: data.gender
      });
    } else {
      res.send("Not found");
    }
  } catch (err) {
    res.send(err.message);
  }
};



