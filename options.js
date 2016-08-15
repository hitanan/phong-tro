window.onload=loadData;

function loadData(){
	var dataObj = {'laptop-max-value':'0','open-only-first':false};
	chrome.storage.local.get(dataObj, function(obj) {
		document.getElementById('laptop-max-value').value = obj['laptop-max-value'];
		document.getElementById('open-only-first').checked = obj['open-only-first'];
	});
	
	document.getElementById('laptop-max-value').focus();
}

function saveOptions() {
	var dataObj = {};
	dataObj['laptop-max-value'] = document.getElementById('laptop-max-value').value;
	dataObj['open-only-first'] = document.getElementById('open-only-first').checked;
	chrome.storage.local.set(dataObj, function() {window.close();});
}
// When the popup HTML has loaded
window.addEventListener('load', function(evt) {
	//loadData();
    document.getElementById('fform').addEventListener('submit', saveOptions);
});