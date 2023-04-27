const col = document.querySelectorAll(".col");

document.addEventListener("keydown", (event) => {
  event.preventDefault();
  if (event.code.toLowerCase() === "space") {
    setRandomColors();
  }
});

// рандомная генерация цвета

// function getRandomNumber() {
//   const characterList = "0123456789ABSDEF";
//   let color = "";
//   for (i = 0; i < 6; i++) {
//     color += characterList[Math.floor(Math.random() * characterList.length)];
//     console.log(color);
//   }
//   return "#" + color;
// }

function setRandomColors() {
  col.forEach((item) => {
    const isLocked = item.querySelector("i").classList.contains("fa-lock");
    const colText = item.querySelector("h2");
    const color = chroma.random();
    if (isLocked) {
      return;
    }
    const lock = item.querySelector("button");
    lock.addEventListener("click", () => {
      const node = lock.querySelector("i");
      node.classList.toggle("fa-lock-open");
      node.classList.toggle("fa-lock");
      console.log(node);
      copyToClickboard(colText);
    });
    colText.innerText = color;
    item.style.background = color;

    setTextColor(colText, color);
    setTextColor(lock, color);
  });
}
function setTextColor(text, color) {
  const luminance = chroma(color).luminance();
  text.style.color = luminance > 0.5 ? "black" : "white";
}
setRandomColors();

function copyToClickboard(text) {
  return navigator.clipboard.writeText(text);
}
