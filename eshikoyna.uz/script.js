var themeToggleDarkIcon = document.getElementById(
  "theme-toggle-dark-icon"
);
var themeToggleLightIcon = document.getElementById(
  "theme-toggle-light-icon"
);

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
}

var themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});


var open_burger = document.getElementById('open_burger');
var main = document.querySelector('#main');
var footer = document.querySelector('#footer');
var header = document.querySelector('#header');
var burger_anim = document.getElementById('burger_anim');
var burger_close = document.getElementById('close_burger');
var opacity_50 = document.getElementById('opacity-50');

open_burger.addEventListener('click', function() {
    burger_anim.classList.toggle('hidden');
    burger_anim.classList.toggle('block');
    opacity_50.classList.toggle('h-0')
    opacity_50.classList.toggle('h-screen')
    main.classList.toggle('absolute');
    main.classList.toggle('block')
    main.classList.toggle('right-3/4')
    header.classList.toggle('sticky')
    header.classList.toggle('right-3/4')
    footer.classList.toggle('static')
    footer.classList.toggle('right-3/4')
    console.log(header.className);

})

burger_close.addEventListener('click', function() {
    burger_anim.classList.toggle('hidden');
    burger_anim.classList.toggle('block');
    opacity_50.classList.toggle('h-0')
    opacity_50.classList.toggle('h-screen')
    main.classList.toggle('absolute')
    main.classList.toggle('block')
    main.classList.toggle('right-3/4')
    header.classList.toggle('sticky')
    header.classList.toggle('absolute')
    header.classList.toggle('right-3/4')
    footer.classList.toggle('static')
    footer.classList.toggle('right-3/4')
});

var btnforselect = document.getElementById('btnforselect');
var select = document.getElementById('select');
var body = document.getElementById('body');

btnforselect.addEventListener('click', function () {
    select.classList.toggle('hidden');
    select.classList.toggle('flex');
})

function scroll() {
    header.classList.toggle('bg-light-gray');
    header.classList.toggle('bg-white');
};
// Initialize and add the map
let map;

async function initMap() {
    // The location of Uluru
    const position = { lat: -25.344, lng: 131.031 };
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

    // The map, centered at Uluru
    map = new Map(document.getElementById("map"), {
        zoom: 4,
        center: position,
        mapId: "DEMO_MAP_ID",
    });

    // The marker, positioned at Uluru
    const marker = new AdvancedMarkerView({
        map: map,
        position: position,
        title: "Uluru",
    });
}

initMap();