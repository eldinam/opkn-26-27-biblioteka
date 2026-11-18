# V_04 · Šta je urađeno u projektu

## Promjene

| Fajl | Šta se promijenilo |
|---|---|
| `package.json` | novi paket `slugify`, `ejs` na verziji 7 |
| `routes/knjige.js` | ruta `/naslov/:slug` (knjiga po naslovu) |
| `app.js` | JSON rute su sada na `/api/knjige`, HTML stranice na `/knjige` |
| `routes/knjigeStranice.js` | **novo:** rute koje vraćaju HTML stranice |
| `views/partials/zaglavlje.ejs` | **novo:** početak stranice i navigacija |
| `views/partials/podnozje.ejs` | **novo:** kraj stranice |
| `views/knjige/lista.ejs` | **novo:** tabela svih knjiga |
| `views/index.ejs` | koristi zaglavlje i podnožje, link na knjige |
| `public/stylesheets/style.css` | stilovi za navigaciju, tabelu i podnožje |

## Adrese

| Adresa | Vraća |
|---|---|
| `/knjige` | HTML stranicu sa svim knjigama |
| `/api/knjige` | sve knjige kao JSON |
| `/api/knjige/3` | jednu knjigu kao JSON |
| `/api/knjige/naslov/dervis-i-smrt` | knjigu po slugu naslova |

Sve JSON rute iz zadatka 3 su ostale, samo sa `/api` ispred.

## Šta smo naučili

- **Slug** je naslov pretvoren u adresu: mala slova, bez razmaka i bez č, ć, š, ž, đ (`dervis-i-smrt`).
- **API i stranice:** iste podatke vraćamo na dva načina. `/api/...` je JSON za programe, ostalo je HTML za ljude.
- **EJS oznake:**
  - `<%= %>` ispiše vrijednost (sigurno, HTML se ne izvršava)
  - `<% %>` JavaScript bez ispisa (`if`, `forEach`)
  - `<%- include("...") %>` ubaci drugi šablon
  - `<%# %>` komentar, ne stiže do browsera
- **Partials:** zaglavlje i podnožje pišemo jednom i uključujemo u svaku stranicu.
- **Moderni JS:** `const`/`let`, arrow funkcije, template string, `find`/`filter`/`map`, spread, destrukturiranje. Podsjetnik: `moderni_js.md`.

## Pokretanje

```bash
git pull
npm install
npm run dev
```

`npm install` je obavezan jer je dodan novi paket.

## Sljedeće

Zadatak 4: `TODO.md` u ovom folderu. Na sljedećim vježbama: organizacija koda (MVC).
