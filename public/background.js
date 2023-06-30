// background.js
chrome.runtime.onMessage.addListener((obj, sender, response) => {
  if (obj.action === "openPopup") {
    console.log("background");
    // chrome.action.setPopup({ popup: "index.html" });
    // chrome.action.openPopup();
    // chrome.windows.create({
    //   url: "http://localhost:3000/",
    //   type: "popup",
    //   width: 800,
    //   height: 600,
    // });
    createOverlay();
  }
});
