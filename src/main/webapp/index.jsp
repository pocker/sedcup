<html>
<head>

<meta name="viewport" content="initial-scale=1.0">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script type="text/javascript" src="node_modules/angular/angular.js"></script>

<script type="text/javascript" src="js/app/app.js"></script>
<script type="text/javascript" src="js/controller/mapController.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAfV0tM9jLqbujIjraexLiwewWm2Tvb31I"></script>
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
<body ng-app="sedcup">
	<div id="map"  ng-controller="mapController"></div>


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
