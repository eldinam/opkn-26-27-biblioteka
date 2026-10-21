# V_02 · Uputstvo: kod sa GitHub-a i pokretanje

Repozitorij vježbi: https://github.com/eldinam/opkn-26-27-biblioteka

## 0. Git: instalacija i podešavanje

Git treba za `git clone` i `git pull`. Ko ga nema, može koristiti ZIP (vidi ispod), ali će Git trebati najkasnije u 14. sedmici.

**Provjera:**

```bash
git --version
```

Svaka verzija `2.x` je u redu (npr. `git version 2.47.1`). Ako piše da komanda ne postoji, instalirajte:

- **Windows:** https://git-scm.com → Download → instalacija sa podrazumijevanim opcijama. Kod pitanja o imenu početne grane izaberite **Override... → main**. Zatim zatvorite i ponovo otvorite VS Code.
- **macOS:** u terminalu `git --version` ponudi instalaciju (Command Line Tools), ili `brew install git`.
- **Linux (Ubuntu):** `sudo apt install git`

**Podešavanje (jednom, treba za commit; za clone i pull nije obavezno):**

```bash
git config --global user.name "Ime Prezime"
git config --global user.email "vas@email.com"
git config --global init.defaultBranch main
```

Provjera podešavanja:

```bash
git config --global --list
```

## 1. Preuzimanje projekta (prvi put)

### Ako imate Git

U terminalu uđite u folder gdje držite projekte (npr. Desktop), pa:

```bash
git clone https://github.com/eldinam/opkn-26-27-biblioteka.git
cd opkn-26-27-biblioteka
npm install
npm start
```

U VS Code-u: **File → Open Folder** → `opkn-26-27-biblioteka`.

### Ako nemate Git

1. Otvorite repozitorij, desno **Releases** → zadnja sedmica
2. **Source code (zip)**
3. Raspakujte i otvorite folder u VS Code-u
4. U terminalu: `npm install`, pa `npm start`

Aplikacija radi na http://localhost:3000

## 2. Preuzimanje novog koda (svake sedmice)

**Sa Git-om**, u folderu projekta:

```bash
git pull
npm install
```

`npm install` je potreban jer su možda dodani novi paketi.

Ako `git pull` javi grešku jer ste mijenjali iste fajlove:

```bash
git stash        # skloni vaše izmjene sa strane
git pull         # preuzmi novi kod
git stash pop    # vrati vaše izmjene (ako se sudare, VS Code pokaže gdje)
```

**Bez Git-a:** preuzmite novi ZIP sa Releases.

## 3. Stanje projekta po sedmicama

| Tag | Šta sadrži |
|---|---|
| `vNN-cas` | kod sa termina (ono što smo radili zajedno) |
| `vNN` | kod sa rješenjem zadatka, objavljen nakon roka |

Na GitHub-u: meni **main → Tags** → izaberite tag. Sa Git-om, nova grana od taga (npr. ako vam projekat ne radi):

```bash
git switch -c moj-rad v02-cas
```

## 4. Od V_02: pokretanje sa `npm run dev`

```bash
npm run dev
```

Server se sam restartuje kad sačuvate `.js` fajl. Zaustavljanje: `Ctrl + C`.

Ažuriranje paketa iz generatora (ako radite na svom projektu od prošle sedmice):

```bash
npm install express@4 ejs@3 debug@4 morgan@latest cookie-parser@latest http-errors@latest
```

Nemojte pokretati `npm audit fix --force`: instalira nove glavne verzije i može pokvariti projekat.

## Česti problemi

| Poruka | Rješenje |
|---|---|
| `EADDRINUSE :::3000` | server već radi u drugom terminalu, zaustavite ga sa `Ctrl + C` |
| `npm ERR! enoent ... package.json` | niste u folderu projekta: `cd opkn-26-27-biblioteka` |
| `Cannot find module '...'` | pokrenite `npm install`; za vlastiti modul provjerite putanju (`./` ili `../`) |
| `npm.ps1 cannot be loaded` | u terminalu VS Code-a izaberite **Command Prompt** ili **Git Bash** umjesto PowerShell-a |
