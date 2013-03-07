var window;
var map;
var stations = [];
var ashmontBranch = [];
var braintreeBranch = [];
var markers = [];
var user;
var userLat;
var userLong;
var closest = [];
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
	
	// display markers
/*	window = new google.maps.InfoWindow({
		content: "ok"
	});*/
	for (var i = 0; i < markers.length; i++){
		markers[i].setMap(map);
/*		newContent = "TEST";
		google.maps.event.addListener(markers[i], 'click', function() {
			window.open(map, markers[i]);
			window.setContent(newContent);
		});*/
	}
	
	// create polyline
	redLine = new google.maps.Polyline({
		path: stations,
		strokeColor: "#CC0000",
		strokeOpacity: 1.0,
		strokeWeight: 8
	});
	redLine.setMap(map);
	
	braintreeLine = new google.maps.Polyline({
		path: braintreeBranch,
		strokeColor: "#CC0000",
		strokeOpacity: 1.0,
		strokeWeight: 8
	});
	braintreeLine.setMap(map);
	
	ashmontLine = new google.maps.Polyline({
		path: ashmontBranch,
		strokeColor: "#CC0000",
		strokeOpacity: 1.0,
		strokeWeight: 8
	});
	ashmontLine.setMap(map);
	getUserLocation();
}

/*function getCharacterLocations()
{
	// set marker images
	carmenIcon = "carmen.png";
	waldoIcon = "waldo.png";

	var request = new XMLHttpRequest();
	function location(){
		request.open("GET", "http://messagehub.herokuapp.com/a3.json", true);
		request.send(null);
		request.onreadystatechange = callback;
	}
	function callback(){
		if (request.readyState == 4 && request.status == 200){
			locations = JSON.parse(request.responseText);
			for (var i = 0; i < locations.length; i++){
				
			}
		}
	}
}*/

function toRad(degrees)
{
	return degrees * (Math.PI / 180);
}

function getDistance(loc1, loc2)
{
	var lat1 = loc1.lat();
	var lon1 = loc1.lng();
	var lat2 = loc2.lat();
	var lon2 = loc2.lng();
	var R = 3961;					// miles
	var dLat = (lat2-lat1).toRad();
	var dLon = (lon2-lon1).toRad();
	var lat1 = lat1.toRad();
	var lat2 = lat2.toRad();
	
	var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
	var c = 2 * Math.atan2(math.sqrt(a), Math.sqrt(1-a));
	var d = R * c;
	console.log("This is my dist! " + d);
	return d;
}

function getClosest(marker)
{
	var currClosest;
	var shortestDist = getDistance(marker.getPosition(), markers[0].getPosition());
	var tempDist;
	for (int i = 0; i < markers.length; i++){
		tempDist = getDistance(marker.getPosition(), markers[i].getPosition());
		if (tempDist < shortestDist){
			shortestDist = tempDist;
			currClosest = markers[i];
		}
	}
	return currClosest;
}

function getUserLocation()
{
	var browserSupportFlag = new Boolean();
	
	if (navigator.geolocation){
		browserSupportFlag = true;
		navigator.geolocation.getCurrentPosition(function(position){
			userLat = position.coords.latitude;
			userLong = position.coords.longitude;
			userMarker = new google.maps.LatLng(userLat, userLong);
			var closestStation = getClosest(userMarker);
			console.log(closestStation.title());
/*			var closestDistance = getDistance(userMarker.getPosition(), closestStation.getPosition());
			console.log("In getUserLocation");*/
			var contentString = '<h1>' + "You are here..." + '\n' + '</h1>' + '<div id="window_content">' + "Your current location is (" + userLat + ", " + userLong + ")."
//									   + '\n' + "The nearest station is " + closestStation.getTitle() + ", which is approximately " + closestDistance + " away from you." + '</div>';
			var infowindow = new google.maps.InfoWindow({
				content: contentString
			});
			var marker = new google.maps.Marker({
				position: userMarker,
				map: map,
				title: "You!"
			});
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(map, marker);
			});
		}, function() {
			handleNoGeolocation(browserSupportFlag);
		});
	}
	else {
		browserSupportFlag = false;
		handleNoGeolocation(browserSupportFlag);
	}
	function handleNoGeolocation(errorFlag) {
		if (errorFlag == true){
			alert("Geolocation failed: Check your browser security settings to enable.");
		}
		else {
			alert("So sorry! Geolocation is not supported in your browser.");
		}
	}
}