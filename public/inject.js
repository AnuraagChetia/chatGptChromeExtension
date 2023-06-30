const createButton = function () {
  const injectElement = document.createElement("button");
  injectElement.className = "klimbb";
  injectElement.innerHTML = "KlimbB";
  injectElement.addEventListener("click", async () => {
    console.log("clicked");
    chrome.runtime.sendMessage({
      action: "showOverlay",
    });
  });
  document.getElementById("start").appendChild(injectElement);
};
createButton();

function createOverlay() {
  const overlayElement = document.createElement("div");
  overlayElement.style.position = "fixed";
  overlayElement.style.top = "0";
  overlayElement.style.left = "0";
  overlayElement.style.width = "100%";
  overlayElement.style.height = "100%";
  overlayElement.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  overlayElement.style.zIndex = "9999";

  // Replace 'YOUR_REACT_APP_CONTAINER_ID' with the ID of the container element in your React app
  overlayElement.innerHTML = `
  <div id="YOUR_REACT_APP_CONTAINER_ID" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
    <iframe src="http://localhost:3000/" style="width: 100%; height: 100%; border: none;"></iframe>
  </div>
`;
  overlayElement.addEventListener("click", (event) => {
    // Check if the click event target is not inside the iframe
    const iframe = overlayElement.querySelector("iframe");
    if (!iframe.contains(event.target)) {
      // Remove the overlay element to close the modal
      document.body.removeChild(overlayElement);
    }
  });

  document.body.appendChild(overlayElement);
}

chrome.runtime.onMessage.addListener((obj, sender, response) => {
  if (obj.action === "showOverlay") {
    createOverlay();
  }
});

// createOverlay();
