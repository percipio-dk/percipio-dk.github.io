// create a map in the "map" div, set the view to a given place and zoom
var map = L.map('webmap').setView([55.715356, 12.549946], 17);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// add a marker in the given location, attach some popup content to it and open the popup
L.marker([55.715356, 12.549946]).addTo(map)
    .bindPopup('<p><strong class="percipio_blue">Percipio</strong>' + '<br/>' +
    'Fruebjergvej 3' + '<br/>' +
    '2100 K&oslash;benhavn &Oslash; <br/>' +
    '<p/>' +
    '<b>Åbningstider:</b> <br/>efter behov')
    .openPopup();