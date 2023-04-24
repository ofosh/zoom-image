const container = document.querySelector(".image");
const img = document.querySelector(".image img");

function btnIn(e) {
  let cx = e.clientX;
  let cy = e.clientY;
  img.style.width = '1000px';
  img.style.height = '1000px';
  let perX = (cx / 500) * 100;
  let perY = (cy / 500) * 100;
  img.style.marginLeft = -perX + '%'
  img.style.marginRight = -perY + '%'
}

function btnOut(e) {
  img.style.width = '500px';
  img.style.height = '500px';
  img.style.marginLeft = '0%';
  img.style.marginRight = '0%';
}