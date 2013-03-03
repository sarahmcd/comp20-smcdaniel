//var window = new google.mapsInfoWindow();
var map;
var stations = [];
var ashmontBranch = [];
var braintreeBranch = [];
var markers = [];
var user;
var userLat;
var userLong;
var userMarker;

function createMap()
{
	// locate the center of the map [center of MBTA's map]
	mapMiddle = new google.maps.LatLng(42.330497742, -71.1);
	
	// set specifications for zoom, center of map, and map type
	myMap = {
		zoom: 12,
		center: mapMiddle,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	
	// create map
	map = new google.maps.Map(document.getElementById("map_canvas"), myMap);
	
	// set up station markers on map
	tlogo = "tlogo2.png";
	
	stop = new google.maps.LatLng(42.395428, -71.1425);
	markers.push(new google.maps.Marker({position: stop, title: "Alewife Station", icon: tlogo}));
		stations.push(stop);
		
	stop = new google.maps.LatLng(42.39674, -71.1218);
	markers.push(new google.maps.Marker({position: stop, title: "Davis Station", icon: tlogo}));
		stations.push(stop);
		
	stop = new google.maps.LatLng(42.3884, -71.1191);
	markers.push(new google.maps.Marker({position: stop, title: "Porter Square Station", icon: tlogo}));
		stations.push(stop);
	
	stop = new google.maps.LatLng(42.373362, -71.119);
	markers.push(new google.maps.Marker({position: stop, title: "Harvard Square Station", icon: tlogo}));
		stations.push(stop);
		
	stop = new google.maps.LatLng(42.365486, -71.1038);
	markers.push(new google.maps.Marker({position: stop, title: "Central Square Station", icon: tlogo}));
		stations.push(stop);
	
	stop = new google.maps.LatLng(42.362491, -71.0862);
	markers.push(new google.maps.Marker({position: stop, title: "Kendall/MIT Station", icon: tlogo}));
		stations.push(stop);
		
	stop = new google.maps.LatLng(42.361166, -71.0706);
	markers.push(new google.maps.Marker({position: stop, title: "Charles/MGH Station", icon: tlogo}));
		stations.push(stop);
		
	stop = new google.maps.LatLng(42.356395, -71.0624);
	markers.push(new google.maps.Marker({position: stop, title: "Park Street Station", icon: tlogo}));
		stations.push(stop);
		
	stop = new google.maps.LatLng(42.355518, -71.0602);
	markers.push(new google.maps.Marker({position: stop, title: "Downtown Crossing Station", icon: tlogo}));
		stations.push(stop);
		
	stop = new google.maps.LatLng(42.352271, -71.0552);
	markers.push(new google.maps.Marker({position: stop, title: "South Station", icon: tlogo}));
		stations.push(stop);
		
	stop = new google.maps.LatLng(42.342662, -71.057);
	markers.push(new google.maps.Marker({position: stop, title: "Broadway Station", icon: tlogo}));
		stations.push(stop);
	
	stop = new google.maps.LatLng(42.330154, -71.0577);
	markers.push(new google.maps.Marker({position: stop, title: "Andrews Station", icon: tlogo}));
		stations.push(stop);
		
	stop = new google.maps.LatLng(42.320685, -71.0524);
	markers.push(new google.maps.Marker({position: stop, title: "JFK/UMass Station", icon: tlogo}));
		stations.push(stop);
		ashmontBranch.push(stop);
		braintreeBranch.push(stop);
		
	stop = new google.maps.LatLng(42.275275, -71.0296);
	markers.push(new google.maps.Marker({position: stop, title: "North Quincy Station", icon: tlogo}));
		braintreeBranch.push(stop);
	
	stop = new google.maps.LatLng(42.266514, -71.0203);
	markers.push(new google.maps.Marker({position: stop, title: "Wollaston Station", icon: tlogo}));
		braintreeBranch.push(stop);
		
	stop = new google.maps.LatLng(42.251809, -71.0054);
	markers.push(new google.maps.Marker({position: stop, title: "Quincy Center Station", icon: tlogo}));
		braintreeBranch.push(stop);
		
	stop = new google.maps.LatLng(42.233391, -71.0072);
	markers.push(new google.maps.Marker({position: stop, title: "Quincy Adams Station", icon: tlogo}));
		braintreeBranch.push(stop);
		
	stop = new google.maps.LatLng(42.207854, -71.0011);
	markers.push(new google.maps.Marker({position: stop, title: "Braintree Station", icon: tlogo}));
		braintreeBranch.push(stop);
		
	stop = new google.maps.LatLng(42.31129, -71.0533);
	markers.push(new google.maps.Marker({position: stop, title: "Savin Hill Station", icon: tlogo}));
		ashmontBranch.push(stop);
	
	stop = new google.maps.LatLng(42.300093, -71.0617);
	markers.push(new google.maps.Marker({position: stop, title: "Fields Corner Station", icon: tlogo}));
		ashmontBranch.push(stop);
		
	stop = new google.maps.LatLng(42.293126, -71.0657);
	markers.push(new google.maps.Marker({position: stop, title: "Shawmut Station", icon: tlogo}));
		ashmontBranch.push(stop);
	
	stop = new google.maps.LatLng(42.284652, -71.0645);
	markers.push(new google.maps.Marker({position: stop, title: "Ashmont Station", icon: tlogo}));
		ashmontBranch.push(stop);
		
	for (i = 0; i < markers.length; i++){
		markers[i].setMap(map);
	}
}