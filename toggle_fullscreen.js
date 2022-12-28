chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'if (document.fullscreenElement) { document.exitFullscreen(); } else { document.body.requestFullscreen(); }'
  });
});
