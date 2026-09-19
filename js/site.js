(function () {
  "use strict";

  var header = document.querySelector("[data-site-header]");
  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.querySelector("[data-site-nav]");
  var links = nav ? Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]')) : [];
  var sections = links
    .map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);

  function closeNav() {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", open ? "false" : "true");
      nav.classList.toggle("is-open", !open);
      document.body.classList.toggle("nav-open", !open);
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) closeNav();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeNav();
    });
  }

  function setActive(id) {
    links.forEach(function (link) {
      var match = link.getAttribute("href") === "#" + id;
      link.classList.toggle("is-active", match);
      if (match) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }

  function onScroll() {
    if (header) {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    }

    var marker = window.scrollY + 120;
    var current = sections[0] && sections[0].id;

    sections.forEach(function (section) {
      if (section.offsetTop <= marker) current = section.id;
    });

    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
      current = sections.length ? sections[sections.length - 1].id : current;
    }

    if (current) setActive(current);
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();
})();
