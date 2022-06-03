let btn = document.getElementById("toggle-btn");
let bulb = document.getElementById("bulb-src");
btn.addEventListener("click", toggleBulb);
function toggleBulb(e) {
  if (btn.textContent.includes("ON")) {
    bulb.src = "./images/on.png";
    btn.textContent = "OFF";
  } else {
    bulb.src = "./images/off.png";
    btn.textContent = "ON";
  }
}
