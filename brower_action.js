var links = [
	'https://www.facebook.com/thuenhadn',
	'https://www.chotot.com/quang-nam-da-nang/thue-phong-tro?mre=2',
	'https://www.chotot.com/quang-nam-da-nang/thue-nha-dat?mre=2',
	'https://muaban.net/nha-tro-phong-tro-da-nang-l15-c3405?min=1000&max=3000&cr=1000',
	'https://muaban.net/nha-hem-ngo-da-nang-l15-c3407?min=1000&max=3000&cr=1000',
	'http://rongbay.com/Da-Nang/Nha-trong-ngo-hem-kiet-Thue-va-cho-thue-nha-c272-t791-d141.html?pr=6&md=141',
	'http://rongbay.com/Da-Nang/Nha-rieng-nguyen-can-Thue-va-cho-thue-nha-c272-t786-d141.html?pr=6&md=141',
	'http://rongbay.com/Da-Nang/Nha-tro-Phong-tro-Thue-va-cho-thue-nha-c272-t788-d141.html?pr=6&md=141',
	'https://www.chotot.com/quang-nam-da-nang/mua-ban-may-tinh-laptop',
	'http://rongbay.com/Da-Nang/Laptop-Netbook-May-tinh-va-Laptop-c1-t28.html',
	'http://alonhadat.com.vn/nha-dat/cho-thue/nha-trong-hem/3/da-nang.html?dt=0&gia=2&huong=0',
	'http://batdongsan.com.vn/cho-thue-nha-rieng-da-nang/-1/2/-1/-1',
	'http://chothuedanang.net/cho-thue-nha-tro-phong-tro-da-nang.htm'
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
	
    $('#timphong').on('click', function(e) {
		var ids = [7,3,1];
		gotoPaths(ids);
	});
	$('#timnha').on('click', function(e) {
		var ids = [12,11,10,6,5,4,2];
		gotoPaths(ids);
	});
	$('#timlaptop').on('click', function(e) {
		var ids = [9,8];
		gotoPaths(ids);
	});
	$('#timtonghop').on('click', function(e) {
		var ids = [1,2,8];
		gotoPaths(ids);
	});
	
	// create string link ids
	var linkIds = '';
	for (let i = 0; i < links.length; i++) {
		linkIds += '#link_' + i;
		if (i != (links.length - 1)) {
			linkIds += ',';
		}
	}
	// addd listener
	$(linkIds).on('click', function(e) {
		gotoIndex(getIndex(this.id));
	});



});