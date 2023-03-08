"use strict";

const map = L.map("map").setView([41.479736, -71.311124], 16.5);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 16,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const pin = L.icon({
  iconUrl: "./assets/icon-location.svg",
  iconSize: [66, 88],
  iconAnchor: [41.480459, -71.31062],
  popupAnchor: [-3, -76],
});

L.marker([41.480459, -71.31062], { icon: pin }).addTo(map);

const marker = L.marker([50.4501, 30.5234], { alt: "Newport" })
  .addTo(map)
  .bindPopup("Newport, USA");
