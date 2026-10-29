# V_03 · Šta je urađeno u projektu

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

Zadatak 3: `zadatak_03.md` u ovom folderu. Na sljedećim vježbama: paket `slugify` i adrese po naslovu (`/knjige/naslov/dervis-i-smrt`), pa HTML stranice za knjige.
