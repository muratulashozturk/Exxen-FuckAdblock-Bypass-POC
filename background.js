chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    // Check the incoming request url.
    if (details.url =="https://wasset.exxen.com/Scripts/lib/radiantmediaplayer-5.11.3/js/rmp.min.js")
      return {
           // If it's detected, change it then continue.
           redirectUrl: "http://localhost/rmp-bypassed.js" 
        };
  },
  {
    urls: [
      "*://wasset.exxen.com/Scripts/lib/radiantmediaplayer-5.11.3/js/*.js",
    ],
  },
  ["blocking"]
);
