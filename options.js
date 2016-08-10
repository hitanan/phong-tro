window.onload=loadData;

function loadData(){
	var dataObj = {};
	dataObj['flashId'] = '';
	dataObj['linkPattern'] = 'http://localhost:3000/s_index.html?path=./contents/%s/%s_index.html';
	dataObj['alwaysThis'] = false;
	chrome.storage.local.get(dataObj, function(obj) {
		document.getElementById('flashId').value = obj['flashId'];
		document.getElementById('linkPattern').value = obj['linkPattern'];
		document.getElementById('alwaysThis').checked = obj['alwaysThis'];
	});
	
	document.getElementById('flashId').focus();
}

function saveOptions() {
	var dataObj = {};
	dataObj['flashId'] = document.getElementById('flashId').value;
	dataObj['linkPattern'] = document.getElementById('linkPattern').value;
	dataObj['alwaysThis'] = document.getElementById('alwaysThis').checked;
	chrome.storage.local.set(dataObj, function() {window.close();});
}
// When the popup HTML has loaded
window.addEventListener('load', function(evt) {
	//loadData();
    document.getElementById('fform').addEventListener('submit', saveOptions);
});