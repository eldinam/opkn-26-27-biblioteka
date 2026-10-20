# Zadatak 1: Biblioteka je vaša

Nastavljamo na projekat `biblioteka` koji smo napravili na vježbama.

## Zadatak

1. Napravite i pokrenite projekat `biblioteka` (vidi `uputstvo_instalacija.md`).
2. U fajlu `routes/index.js` promijenite naslov iz `'Express'` u `'Biblioteka PMF'`.
3. U fajlu `views/index.ejs`:
   - u `<head>` dodajte `<meta charset="UTF-8">`
   - umjesto teksta „Welcome to“ napišite kratak opis biblioteke
   - dodajte naslov „Omiljene knjige“ i listu (`<ul>`) sa tri knjige i njihovim autorima
4. U fajlu `public/stylesheets/style.css` promijenite izgled stranice: font, boje naslova, širinu sadržaja i razmake.
5. Restartujte server (`Ctrl + C`, pa `npm start`) i provjerite rezultat na `http://localhost:3000`.

## Bonus

U `routes/index.js` objektu koji šaljete u `res.render` dodajte još jedno svojstvo:

```js
res.render('index', { title: 'Biblioteka PMF', autor: 'Vaše ime' });
```

U `views/index.ejs` dodajte podnožje stranice koje ispisuje autora:

```html
<footer>Autor: <%= autor %></footer>
```

## Šta se provjerava

- aplikacija se pokreće bez greške
- naslov u tabu browsera i na stranici je „Biblioteka PMF“
- postoji opis i lista knjiga
- CSS je promijenjen
- (bonus) ime autora dolazi iz rute, a ne direktno iz HTML-a

Projekat sačuvajte. Na sljedećim vježbama nastavljamo na njemu.
