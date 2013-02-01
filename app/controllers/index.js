
$.index.open();


for (var i=0; i<50; i++) {
	
	var child = Ti.UI.createView({
		width: 90,
		height: 90,
		backgroundColor: '#5bf',
		borderRadius: 10
	});
	
	$.view.add(child);
}

