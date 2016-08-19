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
	
	$.getJSON('config.json', function(data) {
        //myItems = data.items;
        console.log(chrome.extension.getURL('config.json'));
		
    });
}

function saveOptions() {
	var dataObj = {};
	dataObj['laptop-max-value'] = document.getElementById('laptop-max-value').value;
	dataObj['laptop-title-exclude'] = document.getElementById('laptop-title-exclude').value;
	dataObj['open-only-first'] = document.getElementById('open-only-first').checked;
	chrome.storage.local.set(dataObj, function() {window.close();});
}

// Note: The file system has been prefixed as of Google Chrome 12:
window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;


// When the popup HTML has loaded
window.addEventListener('load', function(evt) {
	//loadData();
    document.getElementById('fform').addEventListener('submit', saveOptions);
	
	$("#export").on('click', function() {
		
		//window.requestFileSystem(type, size, successCallback, opt_errorCallback)
		window.requestFileSystem(window.TEMPORARY, 1024*1024, onInitFs, errorHandler);
	});
});









function onInitFs(fs) {

  fs.root.getFile('./config.json', {create: true}, function(fileEntry) {

    // Create a FileWriter object for our FileEntry (log.txt).
    fileEntry.createWriter(function(fileWriter) {

      fileWriter.onwriteend = function(e) {
        console.log('Write completed on ' + fileEntry.fullPath);
      };

      fileWriter.onerror = function(e) {
        console.log('Write failed: ' + e.toString());
      };

      // Create a new Blob and write it to log.txt.
      var blob = new Blob(['Lorem Ipsum'], {type: 'text/plain'});

      fileWriter.write(blob);

    }, errorHandler);

  }, errorHandler);

}

function errorHandler(e) {
  var msg = '';

  switch (e.code) {
    case FileError.QUOTA_EXCEEDED_ERR:
      msg = 'QUOTA_EXCEEDED_ERR';
      break;
    case FileError.NOT_FOUND_ERR:
      msg = 'NOT_FOUND_ERR';
      break;
    case FileError.SECURITY_ERR:
      msg = 'SECURITY_ERR';
      break;
    case FileError.INVALID_MODIFICATION_ERR:
      msg = 'INVALID_MODIFICATION_ERR';
      break;
    case FileError.INVALID_STATE_ERR:
      msg = 'INVALID_STATE_ERR';
      break;
    default:
      msg = 'Unknown Error';
      break;
  };

  console.log('Error: ' + msg);
}

