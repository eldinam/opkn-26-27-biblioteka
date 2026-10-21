# Zadatak 2: Knjige i preporuka dana

Nastavljamo na projekat sa časa (tag `v02-cas`). Na početnoj stranici već su datum i zanimljivost dana.

## Zadatak

1. **Modul sa knjigama.** U folderu `data` napravite fajl `knjige.js` koji izvozi niz od **bar 5 knjiga**. Svaka knjiga je objekat sa poljima:

   ```js
   { id: 1, naslov: 'Na Drini ćuprija', autor: 'Ivo Andrić', godina: 1945, zanr: 'roman' }
   ```

   Ne zaboravite `module.exports` na kraju fajla. Ovaj niz koristimo do 8. sedmice, pa unesite knjige koje vam se sviđaju.

2. **Broj knjiga.** U `routes/index.js` uvezite modul (`require`) i pošaljite šablonu broj knjiga. Na početnoj stranici ispišite:

   > U biblioteci je trenutno **5** knjiga.

   Broj se računa iz niza, ne piše se ručno.

3. **Preporuka dana.** Na isti način kao zanimljivost dana, izaberite **nasumičnu knjigu** iz niza i prikažite je na početnoj u posebnoj kartici: naslov, autor i godina.

## Bonus

Pomoću paketa `dayjs` izračunajte koliko je godina prošlo od izdanja preporučene knjige i ispišite to ispod preporuke:

> Od izdanja je prošlo 60 god.

## Savjeti

- Putanja do modula iz `routes/index.js` je `'../data/knjige'`.
- U šablonu polju objekta pristupate tačkom: `<%= preporuka.naslov %>`.
- Ako vidite grešku `... is not defined` u browseru, provjerite da li je ključ u `res.render` napisan isto kao u šablonu.

## Šta se provjerava

- aplikacija se pokreće sa `npm run dev` bez greške
- `data/knjige.js` izvozi niz od bar 5 knjiga sa svim poljima
- broj knjiga na početnoj se mijenja kad dodate ili obrišete knjigu iz niza
- pri osvježavanju stranice (F5) preporuka se mijenja
- (bonus) broj godina od izdanja je izračunat, ne upisan

Rješenje će biti objavljeno nakon roka kao tag `v02`.
