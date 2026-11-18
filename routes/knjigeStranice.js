const express = require("express");
const knjige = require("../data/knjige");

const router = express.Router();

/* GET /knjige: stranica sa listom svih knjiga */
router.get("/", function (req, res) {
  res.render("knjige/lista", {
    naslov: "Knjige",
    aktivna: "knjige",
    knjige,
  });
});

// TODO 1: ruta za stranicu jedne knjige (/knjige/:id)

// TODO 6: stranica sa statistikom (/knjige/statistika). Pažnja: krije se jedna greškica!

module.exports = router;
