document.addEventListener('DOMContentLoaded', function () {
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  var buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.getAttribute('data-filter');
      document.querySelectorAll('.cert-card').forEach(function (card) {
        var show = filter === 'all' || card.getAttribute('data-category') === filter;
        card.classList.toggle('is-hidden', !show);
      });
    });
  });
});
