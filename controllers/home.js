const axios = require('axios').default;

exports.getHome = (req, res) => {

    return res.render("home/index", {
        title: "Homepage",
        message: undefined
    });

}

exports.postHome = async (req, res) => {
    const poke = req.body.pokeinput.toLowerCase();;

    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${poke}`);

        if (response.data) {
            return res.redirect(`/pokemon/${poke}`);
        }
    } catch (error) {
        console.log("Hata:", error);
        return res.status(500).send("Pokemon Can Not Found");
    }
}
