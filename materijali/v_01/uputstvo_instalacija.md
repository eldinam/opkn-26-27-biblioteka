# Uputstvo: instalacija i prvi projekat

Ovo uputstvo pratite kod kuće ako niste završili na vježbama. Na kraju trebate imati aplikaciju koja radi na `http://localhost:3000`.

## 1. Instalacija Node.js

Prvo provjerite imate li ga već. U terminalu upišite `node -v`. Ako se ispiše `v22` ili veći broj, Node.js je spreman i možete preći na korak 2.

### Nemate Node.js ili imate stariju verziju od 22

1. Otvorite https://nodejs.org i preuzmite verziju **LTS**.
2. Pokrenite instalaciju i ostavite sve podrazumijevane opcije (uključeno je i „Add to PATH“). Ako imate stariju verziju, instalacija je sama zamijeni, ne treba je prvo deinstalirati.
3. Uz Node.js se automatski instalira i **npm**.

Isto iz terminala:

- **Windows:** `winget install OpenJS.NodeJS.LTS` (za nadogradnju postojeće: `winget upgrade OpenJS.NodeJS.LTS`)
- **macOS (Homebrew):** `brew install node` (za nadogradnju: `brew upgrade node`)
- **Linux (Ubuntu):** uputstvo na https://nodejs.org/en/download (paket iz `apt` je često zastario)

### Poslije instalacije

Zatvorite **sve** terminale i VS Code, pa ih otvorite ponovo. Terminal koji je bio otvoren tokom instalacije i dalje vidi staru verziju. Zatim ponovo `node -v`.

### Više verzija na istom računaru (neobavezno)

Ako vam za drugi predmet ili posao treba druga verzija Node.js-a, koristite menadžer verzija: **nvm-windows** (https://github.com/coreybutler/nvm-windows) na Windowsu ili **nvm** (https://github.com/nvm-sh/nvm) na macOS-u i Linuxu. Primjer: `nvm install 22`, pa `nvm use 22`.

## 2. Instalacija Visual Studio Code

1. Otvorite https://code.visualstudio.com i preuzmite instalaciju za svoj sistem.
2. Tokom instalacije označite **Add to PATH** i **Add "Open with Code" action**.
3. Preporučene ekstenzije (Extensions, `Ctrl + Shift + X`):
   - EJS language support
   - Prettier
   - Error Lens

## 3. Provjera

Otvorite VS Code, zatim **Terminal → New Terminal** i upišite:

```
node -v
npm -v
```

Obje komande moraju ispisati broj verzije. Ako piše da komanda nije prepoznata, restartujte računar i probajte ponovo.

**PowerShell greška** `npm.ps1 cannot be loaded because running scripts is disabled`: u terminalu kliknite strelicu pored dugmeta **+** i izaberite **Command Prompt**, pa ponovite komandu. Druga mogućnost je da jednom u PowerShell-u izvršite:

```
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

## 4. Kreiranje projekta

1. Na Desktopu napravite folder `OPKN`.
2. U VS Code-u: **File → Open Folder** i izaberite folder `OPKN`.
3. Otvorite terminal (**Terminal → New Terminal**). Putanja mora završavati sa `\OPKN`.
4. Upišite redom:

```
npx express-generator --view=ejs biblioteka
cd biblioteka
npm install
npm start
```

Na pitanje `Ok to proceed? (y)` upišite `y` i pritisnite Enter.

5. U browseru otvorite `http://localhost:3000`. Trebate vidjeti naslov **Express** i tekst **Welcome to Express**.

Poslije `npm install` možete vidjeti upozorenja o ranjivostima (`vulnerabilities`). To je očekivano jer generator koristi starije verzije paketa. Pakete ažuriramo na sljedećim vježbama.

## 5. Zaustavljanje i ponovno pokretanje

- Server zaustavljate sa `Ctrl + C` u terminalu.
- Kad sljedeći put otvorite projekat: **File → Open Folder → biblioteka**, terminal, pa `npm start`.
- Izmjene u `.js` fajlovima zahtijevaju restart servera. Izmjene u `.ejs` i `.css` fajlovima se vide nakon osvježavanja browsera (F5).

## Najčešće greške

| Poruka | Rješenje |
|---|---|
| `Cannot find module 'express'` | pokrenite `npm install` u folderu `biblioteka` |
| `enoent ... package.json` | niste u folderu projekta, upišite `cd biblioteka` |
| `EADDRINUSE :::3000` | server već radi u drugom terminalu, zaustavite ga sa `Ctrl + C` |
| `This site can't be reached` | server nije pokrenut, pogledajte terminal |
