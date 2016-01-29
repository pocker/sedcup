/**
 * 
 */

(function() {
	'use strict';
	angular.module('sedcup').controller('mapController', mapController);

	var pois = [
			[ '1', 'Rongy kocsma', '46.263883', '20.131972', 'icon/bar_coktail.png', [30]],
			[ '2', 'Havanna söröző', '46.252753', '20.132720', 'icon/bar_coktail.png', [21]],
			[ '3', 'Pivo vár', '46.247843', '20.142431', 'icon/bar_coktail.png', [23, 24, 27]],
			[ '4', 'Soccer club', '46.252578', '20.143465', 'icon/bar_coktail.png', [12, 28, 35, 21]],
			[ '5', 'Hungi vigadó', '46.254485', '20.152984', 'icon/bar_coktail.png', [32, 31, 15]],
			[ '6', 'Vak egér', '46.245715', '20.159241', 'icon/bar_coktail.png', [34]],
			[ '7', 'Betyárok tanyája', '46.258182', '20.168439', 'icon/bar_coktail.png', [33] ],
			[ '8', 'Blues cafe', '46.250265', '20.147396', 'icon/bar_coktail.png', [8, 11, 27, 24]],
			[ '9', 'Acapella', '46.252011', '20.147569', 'icon/icecream.png', [28, 35, 29]],
			[ '10', 'Cairo cafe', '46.251567', '20.149837', 'icon/bar_coktail.png', [26, 11, 8, 10, 27]],
			[ '11', 'McDonalds', '46.251365', '20.146798', 'icon/restaurant.png', [27, 35, 11]],
			[ '12', 'Kárász utca pad', '46.251121', '20.147405', 'icon/lodging_0star.png', [27, 8, 10, 7]],
			[ '13', 'Tesco Express Dugonics tér', '46.250791', '20.143704', 'icon/conveniencestore.png', [22]],
			[ '14', 'Tesco Express Tisza Lajos sgt.', '46.256206', '20.148070', 'icon/conveniencestore.png', [30, 20, 29]],
			[ '15', 'Tesco Tisza Center', '46.259499', '20.171159', 'icon/conveniencestore.png', [6, 0] ],
			[ '16', 'Széchenyi tér pad', '46.254493', '20.149307', 'icon/lodging_0star.png', [29, 31, 13]],
			[ '17', 'Tisza part', '46.250175', '20.151811', 'icon/lodging_0star.png', [26, 9, 34, 11, 25]],
			[ '18', 'Sing sing', '46.256692,', '20.138590', 'icon/jazzclub.png', [1, 30, 21]],
			[ '19', 'Jate club', '46.249755,', '20.146125', 'icon/jazzclub.png', [24, 12, 10]],
			[ '20', 'Tisza dokk', '46.254394,', '20.154493', 'icon/jazzclub.png', [31, 4]],
			[ 'n', '', '46.255248', '20.143757', '', [31, 29, 30]],
			[ 'n', '', '46.251924', '20.138521', [1]],
			[ 'n', '', '46.249609', '20.137877', '', [2, 12]],
			[ 'n', '', '46.246285', '20.145430', '', [24, 12, 25]],
			[ 'n', '', '46.249624', '20.147480', '', [18, 7, 11, 27]],
			[ 'n', '', '46.247087', '20.150065', '', [24, 16, 26]],
			[ 'n', '', '46.250648', '20.149507', '', [24, 11, 8, 9]],
			[ 'n', '', '46.250974', '20.146460', '', [24, 11, 35, 12] ],
			[ 'n', '', '46.252339', '20.145902', '', [35, 3, 10, 20, 27]],
			[ 'n', '', '46.253883', '20.147104', '', [28, 8, 15]],
			[ 'n', '', '46.258601', '20.142855', '', [20, 13, 0]],
			[ 'n', '', '46.253259', '20.152340', '', [15, 16, 8]],
			[ 'n', '', '46.256642', '20.150881', '', [13, 15, 30]],
			[ 'n', '', '46.256613', '20.160365', '', [32, 4]],
			[ 'n', '', '46.249283', '20.158262', '', [16, 5]],
			[ 'n', '', '46.251776', '20.144915', '', [12, 10, 27, 11]]
		];

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
			zoom : 15
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
			if (pois[i][4]) {
				options.icon = pois[i][4];
			} else {
				options.icon = 'icon/hiking.png';
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

			if (i < pois.length - 1) {
				setTimeout(function() {
					addMarker(i+1)
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
