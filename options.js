window.onload=loadData;

function loadData(){
	var dataObj = {
		'laptop-max-value':'',
		'open-only-first':false, 
		'laptop-title-exclude': ''
	};
	chrome.storage.local.get(dataObj, function(obj) {
		document.getElementById('laptop-max-value').value = obj['laptop-max-value'] || '';
		document.getElementById('laptop-title-exclude').value = obj['laptop-title-exclude'] || '';
		document.getElementById('open-only-first').checked = obj['open-only-first'] || false;
	});
	
	document.getElementById('laptop-max-value').focus();
}

function saveOptions() {
	var dataObj = {};
	dataObj['laptop-max-value'] = document.getElementById('laptop-max-value').value;
	dataObj['laptop-title-exclude'] = document.getElementById('laptop-title-exclude').value;
	dataObj['open-only-first'] = document.getElementById('open-only-first').checked;
	chrome.storage.local.set(dataObj, function() {window.close();});
}
// When the popup HTML has loaded
window.addEventListener('load', function(evt) {
	//loadData();
    document.getElementById('fform').addEventListener('submit', saveOptions);
});