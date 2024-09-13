function changeColorHeader() {
  const header = document.getElementsByTagName("header")[0];
  const liList = document.querySelectorAll("header li");
  const getStarted = liList[liList.length - 1];

  window.addEventListener("scroll", function () {
    const height = document.getElementsByClassName("hero")[0].offsetHeight;
    header.style.backgroundColor = this.window.scrollY >= height ? "white" : "";
    getStarted.style.backgroundColor = this.window.scrollY >= height ? "green" : "";
  });
}

changeColorHeader();

function animation() {
  let lettere = document.querySelectorAll("#gigi > g");

  function casual() {
    for (let j = 0; j < 100; j++)
      for (let i = 0; i < lettere.length; i++) {
        let numeroRandom = Math.floor(Math.random() * lettere.length);
        setTimeout(() => {
          alternate(lettere[numeroRandom]);
        }, j * 2000);
      }
  }
  casual();
}
const alternate = (lettera) => (lettera.style.opacity = lettera.style.opacity === "1" ? "0" : "1");

animation();
