# V_02 · Šta je urađeno u projektu

Stanje: tag `v02-cas` (kod sa časa).

## Promjene

| Fajl | Šta se promijenilo |
|---|---|
| `package.json` | novije verzije paketa (0 ranjivosti), novi paket `dayjs`, nova skripta `"dev": "node --watch ./bin/www"` |
| `data/zanimljivosti.js` | **novo:** vlastiti modul, izvozi niz zanimljivosti o knjigama i bibliotekama |
| `routes/index.js` | uvozi `dayjs` i `data/zanimljivosti`; šablonu šalje naslov, današnji datum i nasumičnu zanimljivost |
| `views/index.ejs` | `meta charset`, naslov „Biblioteka PMF“, datum, kartica „Zanimljivost dana“ |
| `public/stylesheets/style.css` | stil za datum i karticu |

## Šta smo naučili

- **Put zahtjeva:** `package.json` → `bin/www` → `app.js` → `routes/index.js` → `views/index.ejs`. Fajlovi iz `public/` idu direktno, bez rute.
- **`app.js`** se čita odozgo prema dolje: zahtjev prolazi kroz svaki `app.use` redom, dok ga neko ne obradi. Ako ga niko ne obradi, dobije se 404.
- **Moduli:** `module.exports` izvozi vrijednost iz fajla, `require` je uvozi. Tri vrste: ugrađeni (`require('http')`), npm paket (`require('express')`), vlastiti (`require('./routes/index')`, uvijek sa `./` ili `../`).
- **`res.render('index', { ... })`**: `'index'` je fajl `views/index.ejs`, a svaki ključ objekta postaje varijabla u šablonu.
- **`npm run dev`**: server se sam restartuje kad sačuvamo `.js` fajl.
- Server pravi stranicu **iznova za svaki zahtjev**, zato je zanimljivost svaki put druga.

## Pokretanje

```bash
npm install
npm run dev
```

http://localhost:3000

## Sljedeće

Zadatak 2: `zadatak_02.md` u ovom folderu. V_03: Express rute, stranica za svaku knjigu (`/knjige/:id`).
