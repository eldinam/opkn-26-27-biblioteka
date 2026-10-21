var express = require("express");
const dayjs = require("dayjs");
require("dayjs/locale/bs");
const zanimljivosti = require("../data/zanimljivosti");

var router = express.Router();
dayjs.locale("bs");

/* GET home page. */
router.get("/", function (req, res, next) {
  const indeks = Math.floor(Math.random() * zanimljivosti.length);

  res.render("index", {
    naslov: "Biblioteka PMF",
    datum: dayjs().format("dddd, D. MMMM YYYY."),
    zanimljivost: zanimljivosti[indeks],
  });
});

module.exports = router;
