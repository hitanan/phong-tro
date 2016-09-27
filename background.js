// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// The onClicked callback function.
function onClickHandler(info, tab) {
    var url = 'https://www.google.com/maps/search/' + encodeURI(info.selectionText + ' Đà Nẵng');
	chrome.tabs.create({url: url, active: true});
	
	console.log(info.menuItemId);
};




chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({"title": "view in Google Map", "contexts":["selection"], "id": "context1"}, function() {
    if (chrome.extension.lastError) {
      console.log("Got expected error: " + chrome.extension.lastError.message);
    }
  });

});


