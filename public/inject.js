const createButton = function () {
  const injectElement = document.createElement("button");
  injectElement.className = "klimbb";
  injectElement.innerHTML = "KlimbB";
  // Apply individual style properties to the button element
  injectElement.style.display = "inline-block";
  injectElement.style.outline = "none";
  injectElement.style.cursor = "pointer";
  injectElement.style.fontSize = "14px";
  injectElement.style.lineHeight = "1";
  injectElement.style.borderRadius = "500px";
  injectElement.style.transitionProperty =
    "background-color, border-color, color, box-shadow, filter";
  injectElement.style.transitionDuration = ".3s";
  injectElement.style.border = "1px solid transparent";
  injectElement.style.letterSpacing = "2px";
  injectElement.style.minWidth = "97px";
  injectElement.style.textTransform = "uppercase";
  injectElement.style.whiteSpace = "normal";
  injectElement.style.fontWeight = "700";
  injectElement.style.textAlign = "center";
  injectElement.style.color = "#fff";
  injectElement.style.backgroundColor = "#3E495F";
  injectElement.style.height = "34px";

  // Add hover effect
  injectElement.addEventListener("mouseover", () => {
    injectElement.style.transform = "scale(1.04)";
    injectElement.style.backgroundColor = "##57688a";
  });
  injectElement.addEventListener("mouseout", () => {
    injectElement.style.transform = "";
    injectElement.style.backgroundColor = "#3E495F";
  });

  injectElement.addEventListener("click", async () => {
    console.log("clicked");
    createOverlay();
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

  overlayElement.innerHTML = `
  <div id="chatBot" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); height:60rem; width:60rem">
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
