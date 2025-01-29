let isVideoEnabled = false;

chrome.action.onClicked.addListener((tab) => {
  isVideoEnabled = !isVideoEnabled;
  chrome.tabs.sendMessage(tab.id, { action: 'toggleVideo', enableVideo: isVideoEnabled });
});