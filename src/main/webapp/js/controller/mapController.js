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
			[ '17', 'Tisza part', '46.250175', '20.151811' ],
			[ '18', 'Sing', 'sing', '46.256692,', '20.138590' ],
			[ '19', 'Jate', 'club', '46.249755,', '20.146125' ],
			[ '20', 'Tisza', 'dokk', '46.254394,', '20.154493' ],
			[ 'n', '', '46.255248', '20.143757' ],
			[ 'n', '', '46.251924', '20.138521' ],
			[ 'n', '', '46.249609', '20.137877' ],
			[ 'n', '', '46.246285', '20.145430' ],
			[ 'n', '', '46.249624', '20.147480' ],
			[ 'n', '', '46.247087', '20.150065' ],
			[ 'n', '', '46.250648', '20.149507' ],
			[ 'n', '', '46.250974', '20.146460' ],
			[ 'n', '', '46.252339', '20.145902' ],
			[ 'n', '', '46.253883', '20.147104' ],
			[ 'n', '', '46.258601', '20.142855' ],
			[ 'n', '', '46.253259', '20.152340' ],
			[ 'n', '', '46.256642', '20.150881' ],
			[ 'n', '', '46.256613', '20.160365' ],
			[ 'n', '', '46.249283', '20.158262' ],
			[ 'n', '', '46.251776', '20.144915' ] ];

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

		addMarker(0);
		function addMarker(i) {
			var options = {
				map : map,
				draggable : false,
				animation : google.maps.Animation.DROP,
				position : {
					lat : parseFloat(pois[i][2]),
					lng : parseFloat(pois[i][3])
				}
			};
			if (pois[i][1]) {
				options.icon = 'https://maps.google.com/mapfiles/ms/icons/green-dot.png';
			}
			var marker = new google.maps.Marker(options);

			markers.push(marker);

			if (pois[i][1]) {
				marker.addListener('click', function() {
					var infoWindow = new google.maps.InfoWindow;
					infoWindow.setContent('<h3>' + pois[i][1] + '</h3>');
					infoWindow.setPosition(marker.position);
					infoWindow.open(map);
				});
			}

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
