console.log("YouTube Audio Only: Content script loaded!");

function toggleVideo(enableVideo) {
  const videoElement = document.querySelector('video');
  if (videoElement) {
    if (enableVideo) {
      videoElement.style.visibility = 'visible';
      videoElement.style.position = 'relative';
    } else {
      videoElement.style.visibility = 'hidden';
      videoElement.style.position = 'absolute';
    }
  }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'toggleVideo') {
    const videoElement = document.querySelector('video');
    if (videoElement) {
      const enableVideo = videoElement.style.visibility !== 'hidden';
      toggleVideo(!enableVideo);
      sendResponse({ enableVideo: !enableVideo });
    } else {
      sendResponse({ enableVideo: false });
    }
  }
  return true; // Required to use sendResponse asynchronously
});