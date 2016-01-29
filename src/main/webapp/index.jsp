<html>
<head>

<meta name="viewport" content="initial-scale=1.0">
<meta charset="utf-8">
<script type="text/javascript" src="node_modules/angular/angular.js"></script>
<style>
html, body {
	height: 100%;
	margin: 0;
	padding: 0;
}

#map {
	height: 100%;
}
</style>
</head>
<body>

	<div id="map"></div>
	<script>
		var map;
		function initMap() {
			map = new google.maps.Map(document.getElementById('map'), {
				center : {
					lat : -34.397,
					lng : 150.644
				},
				zoom : 8
			});
		}
	</script>
	<script
		src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAfV0tM9jLqbujIjraexLiwewWm2Tvb31I&callback=initMap"
		async defer></script>

	<div style="display: none;">
		<h2>Jersey RESTful Web Application!</h2>
		<p>
			<a href="webapi/myresource">Jersey resource</a>
		<p>
			Visit <a href="http://jersey.java.net">Project Jersey website</a> for
			more information on Jersey!
		</p>
	</div>
</body>
</html>
