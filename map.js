"use strict";

const coords = [41.479736, -71.311124];

const map = L.map("map").setView(coords, 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const pin = L.icon({
  iconUrl: "./assets/icon-location.svg",
  iconSize: [66, 88],
  iconAnchor: [33, 88],
  popupAnchor: [0, -90],
});

L.marker(coords, { icon: pin }).addTo(map).bindPopup("Newport, USA").doubleClickZoom("center");
