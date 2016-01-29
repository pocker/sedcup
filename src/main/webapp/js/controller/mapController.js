/**
 * 
 */

(function() {
	'use strict';
	angular.module('sedcup').controller('mapController', mapController);

	var pois = [
			[ '1', 'Rongy kocsma', '46.263883', '20.131972', 'icon/bar_coktail.png' ],
			[ '2', 'Havanna s&ouml;r&ouml;z	&ocirc;', '46.252753', '20.132720', 'icon/bar_coktail.png'   ],
			[ '3', 'Pivo v&aacute;r', '46.247843', '20.142431', 'icon/bar_coktail.png' ],
			[ '4', 'Soccer club', '46.252578', '20.143465', 'icon/bar_coktail.png'  ],
			[ '5', 'Hungi vigad&oacute;', '46.254485', '20.152984', 'icon/bar_coktail.png'  ],
			[ '6', 'Vak eg&eacute;r', '46.245715', '20.159241', 'icon/bar_coktail.png'  ],
			[ '7', 'Bety&aacute;rok tany&aacute;ja', '46.258182', '20.168439', 'icon/bar_coktail.png'  ],
			[ '8', 'Blues cafe', '46.250265', '20.147396', 'icon/bar_coktail.png' ],
			[ '9', 'Acapella', '46.252011', '20.147569', 'icon/icecream.png'  ],
			[ '10', 'Cairo caf&eacute;', '46.251567', '20.149837', 'icon/bar_coktail.png' ],
			[ '11', 'McDonalds', '46.251365', '20.146798', 'icon/restaurant.png' ],
			[ '12', 'K&aacute;r&aacute;sz utca pad', '46.251121', '20.147405', 'icon/lodging_0star.png' ],
			[ '13', 'Tesco Express Dugonics tér', '46.250791', '20.143704', 'icon/conveniencestore.png' ],
			[ '14', 'Tesco Express Tisza Lajos sgt.', '46.256206', '20.148070', 'icon/conveniencestore.png' ],
			[ '15', 'Tesco Tisza Center', '46.259499', '20.171159', 'icon/conveniencestore.png' ],
			[ '16', 'Sz&eacute;chenyi t&eacute;r pad', '46.254493', '20.149307', 'icon/lodging_0star.png'  ],
			[ '17', 'Tisza part', '46.250175', '20.151811', 'icon/lodging_0star.png'  ],
			[ '18', 'Sing', 'sing', '46.256692,', '20.138590', 'icon/jazzclub.png' ],
			[ '19', 'Jate', 'club', '46.249755,', '20.146125', 'icon/jazzclub.png' ],
			[ '20', 'Tisza', 'dokk', '46.254394,', '20.154493', 'icon/jazzclub.png' ],
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
			[ 'n', '', '46.251776', '20.144915' ],
			[ 'n', 'Irinyi', '46.247102', '20.147018', 'icon/battlefield.png' ]];

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
