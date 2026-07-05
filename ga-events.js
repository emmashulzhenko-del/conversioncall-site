document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="tel:"]').forEach(function (link) {
    link.addEventListener('click', function () {
      gtag('event', 'phone_call_click', { link_url: link.getAttribute('href') });
    });
  });
});
