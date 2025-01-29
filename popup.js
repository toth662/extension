document.getElementById('toggleButton').addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  if (!tab) {
    console.error("No active tab found.");
    return;
  }

  chrome.tabs.sendMessage(tab.id, { action: 'toggleVideo' }, (response) => {
    if (chrome.runtime.lastError) {
      console.error("Could not establish connection:", chrome.runtime.lastError.message);
      return;
    }

    if (response && response.enableVideo !== undefined) {
      document.getElementById('toggleButton').textContent = response.enableVideo ? 'Disable Video' : 'Enable Video';
    }
  });
});