// OPKN prezentacije: navigacija i skaliranje slajdova.
// Tipke: strelice / Space / PageDown = naprijed, Backspace / PageUp = nazad,
// Home / End = prvi / zadnji slajd, F = cijeli ekran.
(function () {
  var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
  var deckTitle = document.body.getAttribute('data-title') || document.title;
  var current = 0;

  var progress = document.createElement('div');
  progress.className = 'progress';
  document.body.appendChild(progress);

  var hint = document.createElement('div');
  hint.className = 'hint';
  hint.textContent = '← → navigacija · F cijeli ekran · Ctrl+P u PDF';
  document.body.appendChild(hint);
  setTimeout(function () { hint.style.opacity = '0'; }, 5000);

  slides.forEach(function (s, i) {
    if (s.querySelector('.footer')) return;
    var f = document.createElement('div');
    f.className = 'footer';
    f.innerHTML = '<span>' + deckTitle + '</span><span>' + (i + 1) + ' / ' + slides.length + '</span>';
    s.appendChild(f);
  });

  function scale() {
    var k = Math.min(window.innerWidth / 1600, window.innerHeight / 900);
    slides.forEach(function (s) { s.style.transform = 'translate(-50%, -50%) scale(' + k + ')'; });
  }

  function show(i) {
    current = Math.max(0, Math.min(slides.length - 1, i));
    slides.forEach(function (s, j) { s.classList.toggle('active', j === current); });
    progress.style.width = ((current + 1) / slides.length * 100) + '%';
    history.replaceState(null, '', '#' + (current + 1));
  }

  document.addEventListener('keydown', function (e) {
    var k = e.key;
    if (k === 'ArrowRight' || k === 'ArrowDown' || k === ' ' || k === 'PageDown') { e.preventDefault(); show(current + 1); }
    else if (k === 'ArrowLeft' || k === 'ArrowUp' || k === 'PageUp' || k === 'Backspace') { e.preventDefault(); show(current - 1); }
    else if (k === 'Home') show(0);
    else if (k === 'End') show(slides.length - 1);
    else if (k === 'f' || k === 'F') {
      if (!document.fullscreenElement) document.documentElement.requestFullscreen();
      else document.exitFullscreen();
    }
  });

  document.addEventListener('click', function (e) {
    if (e.target.closest('a, pre, button')) return;
    if (e.clientX > window.innerWidth / 2) show(current + 1); else show(current - 1);
  });

  window.addEventListener('hashchange', function () {
    var n = parseInt(location.hash.slice(1), 10);
    if (!isNaN(n) && n - 1 !== current) show(n - 1);
  });
  window.addEventListener('resize', scale);
  scale();
  var start = parseInt(location.hash.slice(1), 10);
  show(isNaN(start) ? 0 : start - 1);
})();
