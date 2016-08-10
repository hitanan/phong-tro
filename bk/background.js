// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// The onClicked callback function.
function onClickHandler(info, tab) {
  // split bt space from selected text
  var lines = info.selectionText.split(/\s+/);
  var active = false; // first page active
  var count = 0; // timeOut setter
  for(var i = 0;i < lines.length;i++){
    var url = lines[i];
    var exp = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
    if ( url.match(exp) ){
      if (active) {
        openNewTab(lines[i], false, count);
      } else {
        openNewTab(lines[i], true, count);
        active = true;
      }
      count++;
    }
  }
};

function openNewTab(url, active, time_out){
  setTimeout(function(){
    chrome.tabs.create({url: url, active: active});
  }, time_out*1000);
}



chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({"title": "Open links each tab", "contexts":["selection"], "id": "context1"}, function() {
    if (chrome.extension.lastError) {
      console.log("Got expected error: " + chrome.extension.lastError.message);
    }
  });
});

