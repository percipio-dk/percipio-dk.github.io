      function initialize(tablename, municipalitynamefield, errorcolumn2, errorlegend, legendtitle) {
		//example variable values:
		//var tablename = '1Xxf3xEZ9uPeOuJlH_IC5iMaZBc5qjx-DR6mjqUg'
		//var municipalitynamefield = 'KOMNAVN';
		//var errorcolumn2 = 'Arealligning sommerhuse Fejl88';
		//var errorlegend = 'arealligning sommerhuse'
		//var legendtitle = 'FELIKS arealligningen for sommerhuse';

		var errorcolumn = "'" + errorcolumn2 + "'";
        var denmark = new google.maps.LatLng(56.25, 11.5);

        map = new google.maps.Map(document.getElementById('map_canvas'), {
          center: denmark,
          zoom: 7,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        layer = new google.maps.FusionTablesLayer({
          query: {
            select: 'geometry',
            from: tablename
          },
          styles: [{
            polygonOptions: {
              fillOpacity: 0.5
            }
          }, {
            where: errorcolumn + " = 0",
            polygonOptions: {
              fillColor: '#00FF00'
            }
			}, {
            where: errorcolumn + " <= 10.0 And " + errorcolumn + " > 0.1",
            polygonOptions: {
              fillColor: '#FFFF00'
            }
          },  {
            where: errorcolumn + " > 10.0",
            polygonOptions: {
              fillColor: '#FF0000'
            }
			}
		  ]
        });
        layer.setMap(map);

		
		// Create the legend and display on the map
        var legend = document.createElement('div');
        legend.id = 'legend';
        var content = [];
        content.push('<h3>' + legendtitle + '</h3>');
        content.push('<p><div class="color green"></div>Ingen fejl</p>');
        content.push('<p><div class="color yellow"></div>1 til 10 fejl</p>');
        content.push('<p><div class="color red"></div>over 10 fejl</p>');
        content.push('<p>Kortdata er fra <a href="http://www.kms.dk/Produkter+og+ydelser/Produktkatalog/DAGI/">KMS DAGI</a>. </p>');
        legend.innerHTML = content.join('');
        legend.index = 1;
        map.controls[google.maps.ControlPosition.RIGHT_TOP].push(legend);
		
        google.maps.event.addListener(layer, 'click', function(e) {
		  var kommune = e.row[municipalitynamefield].value;
          var fejl = e.row[errorcolumn2].value;
          e.infoWindowHtml = "<div class='googft-info-window' style='font-family: sans-serif'> <b>" + kommune + " kommune</b> <br> <b>Fejltype:</b> " + errorlegend + "<br>  <b>Antal fejl:</b> " + fejl + "<br> </div>"
		  
        });
      }
