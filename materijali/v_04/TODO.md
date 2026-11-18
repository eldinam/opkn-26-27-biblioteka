# Zadatak 4: TODO

Projekat sa časa ima komentare `TODO` u kodu. Uradite ih redom.

U VS Code-u ih nađete pretragom (`Ctrl + Shift + F`, ukucajte `TODO`).

| # | Fajl | Šta |
|---|---|---|
| 1 | `routes/knjigeStranice.js` | ruta za stranicu jedne knjige (`/knjige/:id`) |
| 2 | `views/knjige/detalji.ejs` | stranica sa podacima o knjizi |
| 3 | `views/knjige/lista.ejs` | link na stranicu knjige |
| 4 | `views/knjige/nema.ejs` | stranica sa porukom da knjiga ne postoji |
| 5 (bonus) | `views/partials/zaglavlje.ejs` | označiti aktivni link |
| 6 | `routes/knjigeStranice.js` | stranica sa statistikom (`/knjige/statistika`) |

**Pažnja:** u TODO 6 krije se jedna greškica.

## Šta se provjerava

- `npm run dev` radi bez greške
- `/knjige/2` prikazuje stranicu knjige
- `/knjige/99` prikazuje poruku i vraća status **404**
- na `/knjige` naslov svake knjige vodi na njenu stranicu
- `/knjige/statistika` prikazuje broj knjiga po žanru
- `/api/knjige/...` rute i dalje vraćaju JSON

Rješenje će biti objavljeno nakon roka kao tag `v04`.
