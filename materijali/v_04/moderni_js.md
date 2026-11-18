# Moderni JavaScript: podsjetnik

Sve ovo već koristimo u projektu. Primjeri koji se mogu pokrenuti: `moderni_js.js` u ovom folderu.

```bash
node materijali/v_04/moderni_js.js
```

## const i let

| | Može ponovo `=`? | Kada |
|---|---|---|
| `const` | ne | uvijek, osim kad baš treba mijenjati |
| `let` | da | brojači, vrijednosti koje se mijenjaju |
| `var` | da | ne koristimo (stari način, generator ga još piše) |

`const niz = []` i dalje dozvoljava `niz.push(...)`. Ne smije samo `niz = nešto drugo`.

## Template string

```js
`Knjiga ${knjiga.naslov} ima ${2026 - knjiga.godina} godina`
```

Backtick (`` ` ``, tipka lijevo od 1). Unutar `${}` ide bilo koji izraz.

## Arrow funkcija

```js
function kvadrat(x) { return x * x; }
const kvadrat = (x) => x * x;
const zbir = (a, b) => { return a + b; };
```

Jedan izraz bez `{}`: vraća se sam. Sa `{}`: treba `return`.

## Metode niza

| Metoda | Vraća | Primjer |
|---|---|---|
| `forEach` | ništa, samo prođe kroz niz | `knjige.forEach((k) => console.log(k.naslov))` |
| `find` | **prvi** element ili `undefined` | `knjige.find((k) => k.id === 2)` |
| `filter` | **novi niz** (može biti prazan) | `knjige.filter((k) => k.zanr === "roman")` |
| `map` | **novi niz** iste dužine | `knjige.map((k) => k.naslov)` |

## Spread `...`

```js
const kopija = [...knjige];
const autori = [...new Set(knjige.map((k) => k.autor))]; // bez ponavljanja
const izmijenjena = { ...knjiga, godina: 1967 };
```

## Destrukturiranje

```js
const { naslov, autor } = knjiga;   // const naslov = knjiga.naslov; ...
const { id } = req.params;
const [prva, ...ostale] = knjige;
```

## Skraćeni objekat

```js
res.render("knjige/lista", { knjige });   // isto kao { knjige: knjige }
```

## `||`, `??`, `?.`

| | Značenje |
|---|---|
| `a \|\| b` | ako je `a` „prazno“ (`undefined`, `null`, `0`, `""`, `false`), uzmi `b` |
| `a ?? b` | samo ako je `a` `undefined` ili `null`, uzmi `b` |
| `a?.b` | ako je `a` `undefined`, vrati `undefined` umjesto greške |

U EJS-u: `locals.naslov || "Biblioteka PMF"`.
