var map = L.map('webmap').setView([55.7033442, 12.4652376], 17);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([55.7033442, 12.4652376]).addTo(map)
    .bindPopup('<p><strong class="percipio_blue">Percipio</strong>' + '<br/>' +
    '&Aring;vendingen 24A' + '<br/>' +
    '2700 Br&oslash;nsh&oslash;j <br/>' +
    '<p/>')
    .openPopup();
