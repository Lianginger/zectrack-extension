chrome.browserAction.onClicked.addListener(function(activeTab) {
  var newURL = 'https://www.zectrack.today/'
  chrome.tabs.create({ url: newURL })
})
