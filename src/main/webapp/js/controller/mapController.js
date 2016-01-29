/**
 * 
 */
(function() {
	'use strict';
	angular.module('sedcup').controller('mapController', mapController);

	function mapController($scope) {

		var map = new google.maps.Map(document.getElementById('map'), {
			center : {
				lat : -34.397,
				lng : 150.644
			},
			disableDefaultUI : true,
			zoom : 10
		});
		var marker = new google.maps.Marker({
			map : map,
			draggable : true,
			animation : google.maps.Animation.DROP,
			position : {
				lat : 59.327,
				lng : 18.067
			}
		});
		marker.addListener('click', toggleBounce);

		function toggleBounce() {
			if (marker.getAnimation() !== null) {
				marker.setAnimation(null);
			} else {
				marker.setAnimation(google.maps.Animation.BOUNCE);
			}
		}
	}
})();
