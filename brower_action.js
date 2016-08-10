var links = [
'https://www.chotot.com/quang-nam-da-nang/thue-phong-tro?mre=2',
'https://www.facebook.com/thuenhadn',
'https://muaban.net/nha-tro-phong-tro-quan-thanh-khe-l1507-c3405?min=1000&max=3000&cr=1000'
];

function gotoPath(obj) {

	chrome.tabs.query({currentWindow: true}, function (tabs) {
		var patternURL = links[0];
		if (obj.indexOf(links[1]) >=0 ) {
			patternURL = links[1];
		}
		
		// From last url to first.
		var i = tabs.length - 1;
		while(i >= 0) {
			var curTab = tabs[i];
			if (curTab.url.indexOf(patternURL) >= 0) {
				chrome.tabs.update(curTab.id, {
					active: true, 
					highlighted: true, 
					url: obj
				});
				window.close();
				break;
			}
			
			i--;
		}
		if (i < 0) {
			chrome.tabs.create({
				active: true, 
				url: obj
			});
			window.close();
		}

	});
	
}


window.onload=pasteText;

function pasteText(){
	//document.getElementById('submitbtn').click();
	//document.getElementById('fform').submit();
	
}



// When the popup HTML has loaded
window.addEventListener('load', function(evt) {
    document.getElementById('link0').addEventListener('click', function(e) {
		gotoPath(links[0]);
	});
	  
	document.getElementById('link1').addEventListener('click', function(e) {
		gotoPath(links[1]);
	});
});