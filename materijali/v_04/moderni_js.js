// Moderni JavaScript: sve što koristimo u projektu, na jednom mjestu.
// Pokretanje (iz foldera projekta):  node materijali/v_04/moderni_js.js
// Mijenjajte, pokrećite ponovo, gledajte šta se ispiše.

const knjige = [
  {
    id: 1,
    naslov: "Na Drini ćuprija",
    autor: "Ivo Andrić",
    godina: 1945,
    zanr: "roman",
  },
  {
    id: 2,
    naslov: "Derviš i smrt",
    autor: "Meša Selimović",
    godina: 1966,
    zanr: "roman",
  },
  {
    id: 3,
    naslov: "Prokleta avlija",
    autor: "Ivo Andrić",
    godina: 1954,
    zanr: "novela",
  },
];

function naslov(tekst) {
  console.log(`\n=== ${tekst} ===`);
}

// ------------------------------------------------------------
naslov("1. const i let (umjesto var)");

const grad = "Sarajevo"; // ne mijenja se
let brojac = 0; // mijenja se
brojac = brojac + 1;
console.log(grad, brojac);

// grad = "Mostar";          // greška: const se ne može ponovo dodijeliti
knjige.push({
  id: 4,
  naslov: "Tvrđava",
  autor: "Meša Selimović",
  godina: 1970,
  zanr: "roman",
});
console.log("knjiga u nizu:", knjige.length); // const niz SE MOŽE mijenjati, samo ne zamijeniti

// ------------------------------------------------------------
naslov("2. Template string (backtick `)");

const k = knjige[1];
console.log("Stari način: " + k.naslov + " (" + k.godina + ")");
console.log(`Novi način: ${k.naslov} (${k.godina})`);
console.log(`Prije ${2026 - k.godina} godina`); // unutar ${} može bilo koji izraz

// ------------------------------------------------------------
naslov("3. Arrow funkcije");

function kvadratStari(x) {
  return x * x;
}

const kvadrat = (x) => x * x; // isto, kraće: bez "function" i "return"

const zbir = (a, b) => {
  const rezultat = a + b; // sa vitičastim zagradama treba return
  return rezultat;
};

const noviZbir = (a, b) => a + b;

console.log(kvadratStari(4), kvadrat(4), zbir(2, 3));

// ------------------------------------------------------------
naslov("4. Metode niza: forEach, find, filter, map");

// forEach: uradi nešto za svaki element (ne vraća ništa)
knjige.forEach((knjiga) => console.log("-", knjiga.naslov));

// find: PRVI element koji zadovoljava uslov, ili undefined
const druga = knjige.find((knjiga) => knjiga.id === 2);
console.log("find:", druga.naslov);
console.log(
  "find (nema):",
  knjige.find((knjiga) => knjiga.id === 99),
);

// filter: NOVI NIZ sa svim elementima koji zadovoljavaju uslov
const andric = knjige.filter((knjiga) => knjiga.autor === "Ivo Andrić");
console.log("filter:", andric.length, "knjige");

// map: NOVI NIZ iste dužine, svaki element pretvoren
const naslovi = knjige.map((knjiga) => knjiga.naslov);
console.log("map:", naslovi);

// KVIZ 1: šta ispisuje? (prvo pogodite, pa odkomentarišite)
// console.log(knjige.filter((knjiga) => knjiga.godina > 2000));

// KVIZ 2: šta ispisuje?
// console.log(knjige.map((knjiga) => knjiga.godina > 1960));

// ------------------------------------------------------------
naslov("5. Spread ... (raširi niz ili objekat)");

const kopija = [...knjige]; // nova kopija niza
const brojevi = [3, 1, 2];
const sviBrojevi = [...brojevi, 4, 5];
console.log(sviBrojevi);

const izmijenjena = { ...k, godina: 1967 }; // kopija objekta, jedno polje promijenjeno
console.log(k.godina, izmijenjena.godina);

const autori = [...new Set(knjige.map((knjiga) => knjiga.autor))]; // Set izbaci duplikate
console.log("autori bez ponavljanja:", autori);

// ------------------------------------------------------------
naslov("6. Destrukturiranje (raspakivanje)");

const { naslov: imeKnjige, autor } = k; // izvadi polja iz objekta
console.log(imeKnjige, "-", autor);

const [prva, ...ostale] = knjige; // izvadi elemente iz niza
console.log("prva:", prva.naslov, "| ostalih:", ostale.length);

// U Express-u će||, te viđati ovo:
// const { id } = req.params;      isto kao: const id = req.params.id;

// ------------------------------------------------------------
naslov("7. Skraćeni objekat");

const godina = 1945;
const stariObjekat = { naslov: imeKnjige, godina: godina };
const noviObjekat = { naslov: imeKnjige, godina }; // ako se ključ i varijabla isto zovu
console.log(stariObjekat, noviObjekat);

// U ruti: res.render("knjige/lista", { knjige })   isto kao   { knjige: knjige }

// ------------------------------------------------------------
naslov("8. ?? i ?.");

const zanr = undefined;
console.log(zanr || "nepoznat"); // ako je lijevo "prazno" (undefined, null, 0, "", false), uzmi desno
console.log(0 || 10, 0 ?? 10); // ?? gleda samo undefined i null

const nema = knjige.find((knjiga) => knjiga.id === 99);
console.log(nema?.naslov); // ?. ne pukne ako je nema undefined, samo vrati undefined
// console.log(nema.naslov);  // ovo pukne: Cannot read properties of undefined

// KVIZ 3: šta ispisuje?
// console.log(knjige.find((knjiga) => knjiga.zanr === "novela")?.autor || "nema");
