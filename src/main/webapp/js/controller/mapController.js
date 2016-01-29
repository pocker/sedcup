/**
 * 
 */

(function() {
	'use strict';
	angular.module('sedcup').controller('mapController', mapController);

	var pois = [
			[ '1', 'Rongy kocsma', '46.263883', '20.131972' ],
			[ '2', 'Havanna söröző', '46.252753', '20.132720' ],
			[ '3', 'Pivo vár', '46.247843', '20.142431' ],
			[ '4', 'Soccer club', '46.252578', '20.143465' ],
			[ '5', 'Hungi vigadó', '46.254485', '20.152984' ],
			[ '6', 'Vak egér', '46.245715', '20.159241' ],
			[ '7', 'Betyárok tanyája', '46.258182', '20.168439' ],
			[ '8', 'Blues cafe', '46.250265', '20.147396' ],
			[ '9', 'Acapella', '46.252011', '20.147569' ],
			[ '10', 'Cairo cafe', '46.251567', '20.149837' ],
			[ '11', 'McDonalds', '46.251365', '20.146798' ],
			[ '12', 'Kárász utca pad', '46.251121', '20.147405' ],
			[ '13', 'Tesco Express Dugonics tér', '46.250791', '20.143704' ],
			[ '14', 'Tesco Express Tisza Lajos sgt.', '46.256206', '20.148070' ],
			[ '15', 'Tesco Tisza Center', '46.259499', '20.171159' ],
			[ '16', 'Széchenyi tér pad', '46.254493', '20.149307' ],
			[ '17', 'Tisza part', '46.250175', '20.151811' ] ];

	function mapController($scope) {

		var markerArray = [];

		var markers = [];

		var map = new google.maps.Map(document.getElementById('map'), {
			center : {
				lat : 46.250,
				lng : 20.146
			},
			disableDefaultUI : true,
			scrollwheel : false,
			navigationControl : false,
			mapTypeControl : false,
			scaleControl : false,
			draggable : false,
			zoom : 13
		});
		var marker = new google.maps.Marker({
			map : map,
			draggable : false,
			icon : 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
			animation : google.maps.Animation.DROP,
			position : {
				lat : 59.327,
				lng : 18.067
			}
		});
		marker.addListener('click', toggleBounce);

		addMarker(0);
		function addMarker(i) {

			var marker = new google.maps.Marker(
					{
						map : map,
						draggable : false,
						icon : 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
						animation : google.maps.Animation.DROP,
						position : {
							lat : parseFloat(pois[i][2]),
							lng : parseFloat(pois[i][3])
						}
					});

			markers.push(marker);

			marker.addListener('click', function() {
				var infoWindow = new google.maps.InfoWindow;
				infoWindow.setContent('<h3>' + pois[i][1] + '</h3>');
				infoWindow.setPosition(marker.position);
				infoWindow.open(map);
			});

			i++;
			if (i < pois.length) {
				setTimeout(function() {
					addMarker(i)
				}, 100);
			}
		}

		function setMapOn(marker, map) {
			marker.setMap(map);
		}

		function toggleBounce() {
			if (marker.getAnimation() !== null) {
				marker.setAnimation(null);
			} else {
				marker.setAnimation(google.maps.Animation.BOUNCE);
			}
		}
	}
})();
