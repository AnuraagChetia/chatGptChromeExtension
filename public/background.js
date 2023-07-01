// // background.js
// setInterval(() => {
//   //   chrome.action.openPopup();
//   //   chrome.action.openPopup();
//   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     const activeTab = tabs[0];
//     chrome.tabs.sendMessage(activeTab.id, {
//       message: "showOverlay",
//     });
//   });
// }, 2000);
// chrome.runtime.onMessage.addListener((msg, sender, response) => {
//   if (msg.action === "openPopup") {
//     console.log("background");
//     // chrome.action.setPopup({ popup: "index.html" });
//     // chrome.action.openPopup();
//     // chrome.windows.create({
//     //   url: "http://localhost:3000/",
//     //   type: "popup",
//     //   width: 800,
//     //   height: 600,
//     // });
//     chrome.runtime.sendMessage({
//       action: "showOverlay",
//     });
//   }
//   // if(msg.command=="openModal"){
//   //     document.
//   // }
// });
