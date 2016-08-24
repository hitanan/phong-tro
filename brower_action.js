var data = {
	'timphong':[
		'https://www.facebook.com/thuenhadn',
		'https://muaban.net/nha-tro-phong-tro-da-nang-l15-c3405?min=1000&max=3000&cr=1000',
		'http://rongbay.com/Da-Nang/Nha-tro-Phong-tro-Thue-va-cho-thue-nha-c272-t788-d141.html?pr=6&md=141',
		'https://www.chotot.com/quang-nam-da-nang/da-nang/thue-phong-tro?mre=2'
	],
	'timnha':[
		'http://alonhadat.com.vn/nha-dat/cho-thue/nha-dat/3/da-nang.html?dt=0&gia=2&huong=0',
		'http://batdongsan.com.vn/nha-dat-cho-thue-da-nang/-1/2/-1/-1',
		'http://chothuedanang.net/nha-dat-cho-thue-da-nang/-1/2/-1/-1.htm',
		'http://rongbay.com/Da-Nang/Cho-thue-nha-c272.html?pr=6&ft=1',
		'https://muaban.net/cho-thue-nha-dat-da-nang-l15-c34?min=1000&max=3000&cr=1000',
		'https://www.chotot.com/quang-nam-da-nang/da-nang/thue-can-ho-chung-cu?mre=2',
		'https://www.chotot.com/quang-nam-da-nang/da-nang/thue-phong-tro?mre=2#',
		'https://www.chotot.com/quang-nam-da-nang/da-nang/thue-van-phong-mat-bang-kinh-doanh?mre=2#',
		'https://www.chotot.com/quang-nam-da-nang/da-nang/thue-nha-dat?mre=2',
	],
	'timlaptop': [
		'http://rongbay.com/Da-Nang/Laptop-Netbook-May-tinh-va-Laptop-c1-t28.html',
		'https://www.chotot.com/quang-nam-da-nang/mua-ban-may-tinh-laptop'
	]
};

function gotoPaths(urls) {
	for (var u of urls) {
		chrome.tabs.create({
			url: u
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


// function getIndex(thisId) {
	// var i = thisId.lastIndexOf('_');
	// var n = thisId.substring(i+1, thisId.length);
	// return n;
// }

// When the popup HTML has loaded
window.addEventListener('load', function(evt) {
	
    $('#timphong').on('click', function(e) {
		gotoPaths(data.timphong);
	});
	$('#timnha').on('click', function(e) {
		gotoPaths(data.timnha);
	});
	$('#timlaptop').on('click', function(e) {
		gotoPaths(data.timlaptop);
	});
	$('#timtonghop').on('click', function(e) {
		/*var ids = [1,2,8];
		gotoPaths(ids);
		*/
	});
	
	/*
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
	*/



});