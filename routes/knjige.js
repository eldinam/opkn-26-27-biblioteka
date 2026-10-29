const express = require("express");
const knjige = require("../data/knjige");

const router = express.Router();

router.get("/", function (req, res) {
  res.json(knjige);
});

router.get("/broj", function (req, res) {
  res.json({ broj: knjige.length });
});

router.get("/nasumicna", function (req, res) {
  const indeks = Math.floor(Math.random() * knjige.length);

  res.json(knjige[indeks]);
});

router.get("/:id", function (req, res) {
  const id = Number(req.params.id);

  const knjiga = knjige.find((k) => k.id === id);

  if (!knjiga) {
    return res
      .status(404)
      .json({ greska: `Knjiga ${req.params.id} ne postoji` });
  }

  res.json(knjiga);
});

module.exports = router;
