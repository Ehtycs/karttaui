
window.onload = function(){
	var myelement = document.createElement("button");
	$("#map").add(myelement);
	$(myelement).text("Paina nappia");
	$(myelement).css({
		"z-index": "10", 
		"position": "absolute", 
		"top": "100px", 
		"right": "100px"
	});
	
	$(myelement).click(function(){
		console.log("pienennyttiin");
		$("#map").css({"width": "100px", "height": "100px"});
		window.removeEventListener("resize", onWindowResized, false);
		$("#map").click(function(){
			$("#map").css({"width": $(window).width(), "height": $(window).height()});
			window.addEventListener("resize", onWindowResized, false);
		});
	});
	
	var mycontrol = new ol.control.Control({element: myelement});

	var map = new ol.Map({
		layers: [
		         new ol.layer.Tile({
		        	 source: new ol.source.OSM()
		         })
		         ],
		         target: 'map',
		         controls: ol.control.defaults({
		        	 attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
		        		 collapsible: true
		        	 })
		         }).extend([mycontrol]),
		         view: new ol.View({
		        	 center: [100000, 100000],
		        	 zoom: 3
		         })
	});

	function onWindowResized(){
		var map = $("#map");
		map.css({"width": $(window).width(), "height": $(window).height()});
	};
	
	window.addEventListener("resize", onWindowResized, false);

//	document.getElementById('zoom-out').onclick = function() {
//		var view = map.getView();
//		var zoom = view.getZoom();
//		view.setZoom(zoom - 1);
//	};
//
//	document.getElementById('zoom-in').onclick = function() {
//		var view = map.getView();
//		var zoom = view.getZoom();
//		view.setZoom(zoom + 1);
//	};

}