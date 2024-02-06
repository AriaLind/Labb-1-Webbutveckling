let map;

async function initMap() {

  const position = { lat: 57.67897, lng: 12.00154 };

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    zoom: 15,
    center: position,
    mapId: "PIZZA_MAP",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "ITHS",
  });
}

initMap();
