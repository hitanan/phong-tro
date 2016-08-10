var links = [
	'https://www.facebook.com/thuenhadn',
	'https://www.chotot.com/quang-nam-da-nang/thue-phong-tro?mre=2',
	'https://www.chotot.com/quang-nam-da-nang/thue-nha-dat?mre=2',
	'https://muaban.net/nha-tro-phong-tro-quan-thanh-khe-l1507-c3405?min=1000&max=3000&cr=1000',
	'https://muaban.net/nha-hem-ngo-quan-thanh-khe-l1507-c3407?min=1000&max=3000&cr=1000',
	'http://rongbay.com/Da-Nang/Nha-trong-ngo-hem-kiet-Thue-va-cho-thue-nha-c272-t791-d141.html?pr=6&md=141',
	'http://rongbay.com/Da-Nang/Nha-rieng-nguyen-can-Thue-va-cho-thue-nha-c272-t786-d141.html?pr=6&md=141',
	'http://rongbay.com/Da-Nang/Nha-tro-Phong-tro-Thue-va-cho-thue-nha-c272-t788-d141.html?pr=6&md=141'
];

function gotoPaths(ids) {
	for (var p of ids) {
		chrome.tabs.create({
			url: links[p]
		});
	}
	window.close();
}


function gotoIndex(idx) {
	var patternURL = links[idx];
	chrome.tabs.query({currentWindow: true}, function (tabs) {
		// From last url to first.
		var i = tabs.length - 1;
		while(i >= 0) {
			var curTab = tabs[i];
			if (curTab.url.indexOf(patternURL) >= 0) {
				chrome.tabs.update(curTab.id, {
					active: true, 
					highlighted: true, 
					url: patternURL
				});
				window.close();
				break;
			}
			
			i--;
		}
		if (i < 0) {
			chrome.tabs.create({
				active: true, 
				url: patternURL
			});
			window.close();
		}

	});
}


function getIndex(thisId) {
	var i = thisId.lastIndexOf('_');
	var n = thisId.substring(i+1, thisId.length);
	return n;
}
// When the popup HTML has loaded
window.addEventListener('load', function(evt) {
	
    document.getElementById('timphong').addEventListener('click', function(e) {
		var ids = [7,3,1];
		gotoPaths(ids);
	});
	document.getElementById('timnha').addEventListener('click', function(e) {
		var ids = [6,5,4,2];
		gotoPaths(ids);
	});
	
	document.getElementById('timnha').addEventListener('click', function(e) {
		gotoIndex(getIndex(this.id));
	});
	document.getElementById('link_0').addEventListener('click', function(e) {
		gotoIndex(getIndex(this.id));
	});
	
	document.getElementById('link_1').addEventListener('click', function(e) {
		gotoIndex(getIndex(this.id));
	});
	document.getElementById('link_2').addEventListener('click', function(e) {
		gotoIndex(getIndex(this.id));
	});
	document.getElementById('link_3').addEventListener('click', function(e) {
		gotoIndex(getIndex(this.id));
	});
	document.getElementById('link_4').addEventListener('click', function(e) {
		gotoIndex(getIndex(this.id));
	});
	document.getElementById('link_5').addEventListener('click', function(e) {
		gotoIndex(getIndex(this.id));
	});
	document.getElementById('link_6').addEventListener('click', function(e) {
		gotoIndex(getIndex(this.id));
	});
	document.getElementById('link_7').addEventListener('click', function(e) {
		gotoIndex(getIndex(this.id));
	});


});