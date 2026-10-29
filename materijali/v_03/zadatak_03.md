# Zadatak 3: Rute u četiri nivoa

Nastavljamo na projekat sa časa. Sve rute pišete u `routes/knjige.js`. Svaka vraća JSON (`res.json`).

Zadatak je kao igra: idite nivo po nivo, koliko stignete. Nivo 1 i 2 su obavezni, 3 i 4 su za više bodova.

Na času smo napravili `/knjige`, `/knjige/broj`, `/knjige/nasumicna` i `/knjige/:id`. Na njih se nadovezujete.

## Nivo 1: autori

**`GET /knjige/autori`** vraća spisak svih autora, **bez ponavljanja**.

```json
["Ivo Andrić", "Meša Selimović", "narodna"]
```

## Nivo 2: knjige jednog žanra

**`GET /knjige/zanr/:zanr`** vraća sve knjige tog žanra, npr. `/knjige/zanr/roman`.

- Ako nema nijedne knjige u tom žanru, vratite status **404** i poruku, npr. `{ "greska": "Nema knjiga u žanru poezija" }`.
- Neka radi i `/knjige/zanr/Roman` (velika i mala slova).

## Nivo 3: knjige iz perioda (novo: query parametri)

Ovo na času nismo radili. Adresa `/knjige?od=1950&do=1970` ima **query parametre** (sve iza `?`). U ruti ih čitate iz `req.query`: za ovu adresu `req.query` je `{ od: "1950", do: "1970" }`.

**`GET /knjige?od=1950&do=1970`** vraća samo knjige objavljene od 1950. do 1970. godine (uključujući te godine).

- Ako nema parametara, `/knjige` vraća sve knjige, kao i do sada.
- Treba raditi i samo sa jednim: `/knjige?od=1960` ili `/knjige?do=1950`.
- Ako parametar nije broj (`/knjige?od=abc`), vratite status **400** i poruku.

## Nivo 4: statistika

**`GET /knjige/statistika`** vraća broj knjiga po žanru:

```json
{ "roman": 3, "novela": 1, "balada": 1 }
```

## Bonus: više nasumičnih knjiga

**`GET /knjige/nasumicna/:broj`** vraća toliko **različitih** nasumičnih knjiga, npr. `/knjige/nasumicna/3` vraća 3 knjige.

- Ako je broj veći od broja knjiga, vratite sve knjige (izmiješane).
- Ako broj nije pozitivan broj (`/knjige/nasumicna/abc`, `/knjige/nasumicna/0`), vratite status **400** i poruku.
- Osvježite stranicu (F5) nekoliko puta: svaki put drugi izbor.

## Savjeti

- **Redoslijed!** Statične rute (`/autori`, `/statistika`) moraju biti **iznad** rute `/:id`. Sjetite se kviza sa časa.
- Bez ponavljanja: `[...new Set(niz)]`
- Više rezultata: `filter` (ne `find`)
- Query parametri: `req.query.od`, `req.query.do`. Uvijek su **stringovi**. `do` je rezervisana riječ, pa ne možete napisati `const do = ...`.
- Brojanje: `brojac[zanr] = (brojac[zanr] || 0) + 1`
- Bonus: `/nasumicna/:broj` ima dva dijela putanje, pa se ne sudara sa `/:id`. Kopiju niza pravite sa `[...knjige]`, da ne izmiješate originalni niz.
- Provjera u browseru, a status kod u F12 → Network (filter **All**).

## Šta se provjerava

- aplikacija se pokreće sa `npm run dev` bez greške
- svaka ruta vraća tačan JSON za primjere iznad
- 404 i 400 vraćaju i status i poruku
- rute sa časa (`/knjige`, `/knjige/3`, `/knjige/broj`, `/knjige/nasumicna`) i dalje rade

Rješenje će biti objavljeno nakon roka kao tag `v03`.
