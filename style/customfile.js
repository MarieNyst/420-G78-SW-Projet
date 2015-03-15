function initialize(){
			var styles = [
				{
				  stylers: [
					{ "lightness": -14 }, 
					{ "saturation": -100 }
				  ]
				}
			];
			var styledMap = new google.maps.StyledMapType(styles,
				{name: "Styled Map"});
			var mapOptions = {
				center:new google.maps.LatLng(46.5429,-72.748),
				zoom:9,
				mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
				}
			};
			var map = new google.maps.Map(document.getElementById('map-canvas'),
				mapOptions);
			map.mapTypes.set('map_style', styledMap);
			map.setMapTypeId('map_style');
			setMarkers(map, partner);
		}
			var partner = [
			  ['Digihub', 46.545351, -72.750097, 4],
			  ['Collège Shawinigan', 46.564083, -72.752742, 5],
			  ['Carl', 46.371910, -72.568230, 3],
			  ['JF', 46.357599, -72.625709, 2],
			  ['Café', 46.353274, -72.618186, 1]
			];

		function setMarkers(map, locations) {

			var image = {
				url: 'media/point.png',
				size: new google.maps.Size(20, 32),
				origin: new google.maps.Point(0,0),
				anchor: new google.maps.Point(0, 32)
			};
			var shape = {
				coords: [1, 1, 1, 20, 18, 20, 18 , 1],
				type: 'poly'
			};
			for (var i = 0; i < locations.length; i++) {
				var producteur = locations[i];
				var myLatLng = new google.maps.LatLng(producteur[1], producteur[2]);
				var marker = new google.maps.Marker({
					position: myLatLng,
					map: map,
					icon: image,
					shape: shape,
					title: producteur[0],
					zIndex: producteur[3]
				});
			}
		}
		google.maps.event.addDomListener(window, 'load', initialize);