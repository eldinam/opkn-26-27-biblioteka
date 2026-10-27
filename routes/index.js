var express = require("express");
const dayjs = require("dayjs");
require("dayjs/locale/bs");
const zanimljivosti = require("../data/zanimljivosti");
const knjige = require("../data/knjige");

var router = express.Router();
dayjs.locale("bs");

// Vraća nasumičan element niza
function nasumicno(niz) {
  return niz[Math.floor(Math.random() * niz.length)];
}

/* GET home page. */
router.get("/", function (req, res, next) {
  const preporuka = nasumicno(knjige);

  res.render("index", {
    naslov: "Biblioteka PMF",
    datum: dayjs().format("dddd, D. MMMM YYYY."),
    zanimljivost: nasumicno(zanimljivosti),
    brojKnjiga: knjige.length,
    preporuka: preporuka,
    prijeGodina: dayjs().year() - preporuka.godina, // bonus
  });
});

module.exports = router;
