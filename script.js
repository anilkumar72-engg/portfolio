AOS.init({
  duration: 800,
  once: true
});

function toggleMobileMenu() {
  const dropdown = document.getElementById("mobileDropdown");
  dropdown.classList.toggle("hidden");

  const btn = document.querySelector('#mobileMenu button');
  const expanded = btn.getAttribute('aria-expanded') === 'true' || false;
  btn.setAttribute('aria-expanded', !expanded);
}
