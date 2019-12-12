let divDom = document.createElement("div");
divDom.style.color = "white";
const target = document.getElementById("findTarget");

target.onchange = function() {
  console.log(target.value);
  switch (target.value) {
    case "1":
      divDom.innerText = `demo #001`;
      break;
    case "2":
      divDom.innerText = `demo #002`;
      break;
    case "3":
      divDom.innerText = `demo #003`;
      break;
    case "4":
      divDom.innerText = `demo #004`;
      break;
    default:
  }
  target.parentElement.insertAdjacentElement("afterend", divDom);
};
