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

/* TODO 6: GET /knjige/statistika: stranica sa brojem knjiga po žanru.
   Greškica: ova ruta mora biti IZNAD rute /:id.
   Da je ispod, /:id bi uhvatila "statistika" kao id i prikazala "knjiga ne postoji". */
router.get("/statistika", function (req, res) {
  const poZanru = {};

  knjige.forEach(function (knjiga) {
    const zanr = knjiga.zanr;

    if (poZanru[zanr] === undefined) {
      poZanru[zanr] = 1; // prva knjiga tog žanra
    } else {
      poZanru[zanr] = poZanru[zanr] + 1; // još jedna knjiga tog žanra
    }
  });

  res.render("knjige/statistika", {
    naslov: "Statistika",
    aktivna: "knjige",
    poZanru: poZanru,
    ukupno: knjige.length,
  });
});

/* TODO 1: GET /knjige/3: stranica jedne knjige */
router.get("/:id", function (req, res) {
  const id = Number(req.params.id);

  const knjiga = knjige.find(function (k) {
    return k.id === id;
  });

  // TODO 4: knjiga ne postoji, pa prikazujemo posebnu stranicu sa statusom 404
  if (!knjiga) {
    return res.status(404).render("knjige/nema", {
      naslov: "Knjiga ne postoji",
      aktivna: "knjige",
      id: req.params.id,
    });
  }

  res.render("knjige/detalji", {
    naslov: knjiga.naslov,
    aktivna: "knjige",
    knjiga: knjiga,
  });
});

module.exports = router;
