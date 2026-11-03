# V_03 · Šta je urađeno u projektu

Stanje: tag `v03` (kod sa časa i rješenje zadatka 3).

## Promjene

| Fajl | Šta se promijenilo |
|---|---|
| `routes/knjige.js` | **novo:** rute za knjige |
| `app.js` | `require('./routes/knjige')` i `app.use('/knjige', knjigeRouter)` |

## Rute

| Adresa | Vrsta | Vraća |
|---|---|---|
| `/knjige` | statična | sve knjige |
| `/knjige/broj` | statična | `{ "broj": 5 }` |
| `/knjige/nasumicna` | statična | jednu nasumičnu knjigu |
| `/knjige/:id` | dinamička | knjigu po id-u, a 404 ako ne postoji |

## Rješenje zadatka 3

Sve je u `routes/knjige.js`.

| Nivo | Adresa | Kako radi |
|---|---|---|
| 1 | `/knjige/autori` | `map` uzme autore, `[...new Set(...)]` izbaci ponavljanja |
| 2 | `/knjige/zanr/:zanr` | `filter` po žanru (sa `toLowerCase`, pa radi i `Roman`); prazan rezultat daje 404 |
| 3 | `/knjige?od=1950&do=1970` | ista ruta `"/"`, čita `req.query.od` i `req.query.do`; bez parametara vraća sve; ako nisu brojevi, 400 |
| 4 | `/knjige/statistika` | prazan objekat, pa za svaku knjigu `poZanru[k.zanr] = (poZanru[k.zanr] \|\| 0) + 1` |
| Bonus | `/knjige/nasumicna/:broj` | kopija niza `[...knjige]`, izmiješa se, `slice(0, broj)`; broj manji od 1 ili nije cijeli: 400 |

Statične rute (`/autori`, `/statistika`) su **iznad** `/:id`. Rute sa dva dijela (`/zanr/:zanr`, `/nasumicna/:broj`) se ne sudaraju sa `/:id`.

## Šta smo naučili

- **Ruta** je par metoda + putanja. Kad stigne takav zahtjev, izvrši se funkcija rute.
- Puna adresa je zbir: `app.use('/knjige', ...)` u `app.js` + `router.get('/:id', ...)` u routeru.
- **Statična ruta** ima uvijek istu putanju (`/broj`). **Dinamička** ima varijablu (`/:id`), koja stiže u `req.params.id`, i to uvijek kao **string**.
- **Redoslijed je bitan:** Express provjerava rute odozgo i staje kod prve koja odgovara. `/:id` hvata bilo šta, pa ide na kraj.
- `/:id` hvata samo jedan dio putanje: `/zanr/roman` ima dva dijela i nju ne hvata.
- **Odgovori:** `res.json`, `res.send`, `res.render`, `res.status(404).json(...)`, `res.redirect`. Uz `res.status(...)` ide `return`, da funkcija ne nastavi dalje.

## Pokretanje

```bash
git pull
npm run dev
```

## Sljedeće

Na sljedećim vježbama: paket `slugify` i adrese po naslovu (`/knjige/naslov/dervis-i-smrt`), pa HTML stranice za knjige.
