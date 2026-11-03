const express = require("express");
const knjige = require("../data/knjige");

const router = express.Router();

/* GET /knjige: sve knjige
   Nivo 3: /knjige?od=1950&do=1970 vraća samo knjige iz tog perioda */
router.get("/", function (req, res) {
  const od = req.query.od ? Number(req.query.od) : null;
  const doGodine = req.query.do ? Number(req.query.do) : null; // "do" je rezervisana riječ u JS-u

  if (Number.isNaN(od) || Number.isNaN(doGodine)) {
    return res.status(400).json({ greska: "Parametri od i do moraju biti brojevi" });
  }

  let rezultat = knjige;
  if (od !== null) rezultat = rezultat.filter((k) => k.godina >= od);
  if (doGodine !== null) rezultat = rezultat.filter((k) => k.godina <= doGodine);

  res.json(rezultat);
});

router.get("/broj", function (req, res) {
  res.json({ broj: knjige.length });
});

router.get("/nasumicna", function (req, res) {
  const indeks = Math.floor(Math.random() * knjige.length);

  res.json(knjige[indeks]);
});

/* Bonus: GET /knjige/nasumicna/3: toliko različitih nasumičnih knjiga */
router.get("/nasumicna/:broj", function (req, res) {
  const broj = Number(req.params.broj);

  if (!Number.isInteger(broj) || broj < 1) {
    return res.status(400).json({ greska: "Broj mora biti pozitivan cijeli broj" });
  }

  const izmijesane = [...knjige].sort(() => Math.random() - 0.5); // kopija, original ostaje isti
  res.json(izmijesane.slice(0, broj));
});

/* Nivo 1: GET /knjige/autori: spisak autora bez ponavljanja */
router.get("/autori", function (req, res) {
  const autori = [...new Set(knjige.map((k) => k.autor))];
  res.json(autori);
});

/* Nivo 4: GET /knjige/statistika: broj knjiga po žanru */
router.get("/statistika", function (req, res) {
  const poZanru = {};
  knjige.forEach((k) => {
    poZanru[k.zanr] = (poZanru[k.zanr] || 0) + 1;
  });
  res.json(poZanru);
});

/* Nivo 2: GET /knjige/zanr/roman: knjige jednog žanra */
router.get("/zanr/:zanr", function (req, res) {
  const zanr = req.params.zanr.toLowerCase();
  const rezultat = knjige.filter((k) => k.zanr.toLowerCase() === zanr);

  if (rezultat.length === 0) {
    return res.status(404).json({ greska: `Nema knjiga u žanru ${req.params.zanr}` });
  }
  res.json(rezultat);
});

/* GET /knjige/3: jedna knjiga po id-u (dinamička ruta, mora biti posljednja) */
router.get("/:id", function (req, res) {
  const id = Number(req.params.id);

  const knjiga = knjige.find((k) => k.id === id);

  if (!knjiga) {
    return res.status(404).json({ greska: `Knjiga ${req.params.id} ne postoji` });
  }

  res.json(knjiga);
});

module.exports = router;
