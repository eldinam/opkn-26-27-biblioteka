// Demo za Network tab: HTTP metode, status kodovi, forme, kolačić.
// Bez ijednog paketa, samo ugrađeni moduli. Pokretanje: node server.js
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 4000;

let knjige = [
  { id: 1, naslov: 'Na Drini ćuprija', autor: 'Ivo Andrić' },
  { id: 2, naslov: 'Derviš i smrt', autor: 'Meša Selimović' },
  { id: 3, naslov: 'Tvrđava', autor: 'Meša Selimović' },
];
let sljedeciId = 4;

function posaljiJson(res, status, podaci) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(podaci, null, 2));
}

function procitajTijelo(req, callback) {
  let tijelo = '';
  req.on('data', (dio) => (tijelo += dio));
  req.on('end', () => callback(tijelo));
}

function parsirajTijelo(req, tijelo) {
  const tip = req.headers['content-type'] || '';
  if (tip.includes('application/json')) return JSON.parse(tijelo || '{}');
  return Object.fromEntries(new URLSearchParams(tijelo)); // podaci iz HTML forme
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const dijelovi = url.pathname.split('/').filter(Boolean); // "/api/knjige/2" -> ["api", "knjige", "2"]
  console.log(req.method, req.url);

  // Početna stranica + kolačić koji broji posjete (vidi se u Application → Cookies)
  if (req.method === 'GET' && url.pathname === '/') {
    const stari = /posjete=(\d+)/.exec(req.headers.cookie || '');
    const posjete = stari ? Number(stari[1]) + 1 : 1;
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
      'Set-Cookie': `posjete=${posjete}; Path=/`,
    });
    return res.end(fs.readFileSync(path.join(__dirname, 'index.html')));
  }

  // GET forma: podaci su u URL-u (?q=...)
  if (req.method === 'GET' && url.pathname === '/pretraga') {
    const q = (url.searchParams.get('q') || '').toLowerCase();
    return posaljiJson(res, 200, knjige.filter((k) => k.naslov.toLowerCase().includes(q)));
  }

  // POST forma: podaci su u tijelu zahtjeva, odgovor je redirect (302) nazad na početnu
  if (req.method === 'POST' && url.pathname === '/forma') {
    return procitajTijelo(req, (tijelo) => {
      const podaci = parsirajTijelo(req, tijelo);
      knjige.push({ id: sljedeciId++, naslov: podaci.naslov, autor: podaci.autor });
      res.writeHead(302, { Location: '/' });
      res.end();
    });
  }

  // Stara adresa koja preusmjerava (302)
  if (url.pathname === '/stara-adresa') {
    res.writeHead(302, { Location: '/api/knjige' });
    return res.end();
  }

  // Greška na serveru (500)
  if (url.pathname === '/greska') {
    return posaljiJson(res, 500, { greska: 'Nešto je puklo na serveru' });
  }

  // Spor odgovor (2 sekunde), za kolonu Time i Timing
  if (url.pathname === '/sporo') {
    return setTimeout(() => posaljiJson(res, 200, { poruka: 'Stiglo nakon 2 sekunde' }), 2000);
  }

  // API: /api/knjige i /api/knjige/:id
  if (dijelovi[0] === 'api' && dijelovi[1] === 'knjige') {
    const id = dijelovi[2] ? Number(dijelovi[2]) : null;
    const knjiga = knjige.find((k) => k.id === id);

    if (req.method === 'GET' && id === null) return posaljiJson(res, 200, knjige);
    if (req.method === 'GET') return knjiga ? posaljiJson(res, 200, knjiga) : posaljiJson(res, 404, { greska: `Knjiga ${id} ne postoji` });

    if (req.method === 'POST' && id === null) {
      return procitajTijelo(req, (tijelo) => {
        const podaci = parsirajTijelo(req, tijelo);
        if (!podaci.naslov) return posaljiJson(res, 400, { greska: 'Naslov je obavezan' });
        const nova = { id: sljedeciId++, naslov: podaci.naslov, autor: podaci.autor || '' };
        knjige.push(nova);
        posaljiJson(res, 201, nova);
      });
    }

    if (req.method === 'PUT' && knjiga) {
      return procitajTijelo(req, (tijelo) => {
        Object.assign(knjiga, parsirajTijelo(req, tijelo), { id });
        posaljiJson(res, 200, knjiga);
      });
    }

    if (req.method === 'DELETE' && knjiga) {
      knjige = knjige.filter((k) => k.id !== id);
      res.writeHead(204); // uspjeh, bez tijela odgovora
      return res.end();
    }

    if (!knjiga && id !== null) return posaljiJson(res, 404, { greska: `Knjiga ${id} ne postoji` });
    return posaljiJson(res, 405, { greska: `Metoda ${req.method} nije dozvoljena ovdje` });
  }

  posaljiJson(res, 404, { greska: `Ne postoji: ${url.pathname}` });
});

server.listen(PORT, () => console.log(`Demo radi na http://localhost:${PORT}`));
