function gotoPath(obj) {
    // Cancel the form submit
    //event.preventDefault();

	if (!obj['flashId']) { return false;}

	chrome.tabs.query({currentWindow: true}, function (tabs) {
		var patternURL = obj['linkPattern'].substr(0, obj['linkPattern'].indexOf('%s'));
		
		// From last url to first.
		var i = tabs.length - 1;
		while(i >= 0) {
			var curTab = tabs[i];
			if (curTab.url.indexOf(patternURL) >= 0) {
				chrome.tabs.update(curTab.id, {
					active: true, 
					highlighted: true, 
					url: getURL(obj)
				});
				window.close();
				break;
			}
			
			i--;
		}
		if (i < 0) {
			chrome.tabs.create({
				active: true, 
				url:  getURL(obj)
			});
		}

	});
	
}

function getURL(obj) {
	return obj['linkPattern'].replace(/%s/g, obj['flashId']);
}

window.onload=pasteText;

function pasteText(){
	document.getElementById('flashId').focus();
	document.execCommand('paste');
			
	var dataObj = {};
	dataObj['flashId'] = '';
	dataObj['alwaysThis'] = false;
	dataObj['linkPattern'] = 'http://localhost:3000/s_index.html?path=./contents/%s/%s_index.html';
	chrome.storage.local.get(dataObj, function(obj) {
		if (!obj['alwaysThis'] || !obj['flashId']) {
			obj['flashId'] = document.getElementById('flashId').value;
			chrome.storage.local.set({'flashId': obj['flashId']});
		}
		gotoPath(obj);
	});
	
}

// When the popup HTML has loaded
window.addEventListener('load', function(evt) {
    document.getElementById('fform').addEventListener('submit', function() {
		var dataObj = {};
		dataObj['flashId'] = document.getElementById('flashId').value;
		dataObj['alwaysThis'] = false;
		dataObj['linkPattern'] = 'http://localhost:3000/s_index.html?path=./contents/%s/%s_index.html';
		chrome.storage.local.get(dataObj, function(obj) {
			if (!obj['alwaysThis'] || !obj['flashId']) {
				obj['flashId'] = document.getElementById('flashId').value;
				chrome.storage.local.set({'flashId': obj['flashId']});
			}
			gotoPath(obj);
		});
		gotoPath();
	});
	/*pasteText();
	var folder_path = document.getElementById('flashId').value;
	if (folder_path) { gotoPath();}
	*/
});