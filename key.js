let articleDom = document.createElement("article");
let articleJs = document.createElement("article");
articleDom.style.color = "white";
const target = document.getElementById("findTarget");
const contentFill = document.querySelector(".content");

const demodom1 = `<div class='demo' id='demo'>
                <ul>
                  <li>baseball</li>
                  <li class='li-2'>tennis</li>
                  <li>soccer</li>
                </ul>
              </div>`;
const demojs1 = `document.querySelector('div ul li.li-2')`;
const demojs2 = `document.querySelectorAll('div ul li')`;
const demojs3 = `document.getElementById('demo').classList.remove('demo')`;
const demojs4 = `document.querySelector('div ul li.li-2').innerHTML = '<p>soccer is the best</p>'`;

target.onchange = function() {
  articleDom.innerText = demodom1;
  articleJs.style.color = "deeppink";
  switch (target.value) {
    case "1":
      articleJs.innerText = demojs1;
      break;
    case "2":
      articleJs.innerText = demojs2;
      break;
    case "3":
      articleJs.innerText = demojs3;
      break;
    case "4":
      articleJs.innerText = demojs4;
      break;
    default:
  }
  contentFill.insertAdjacentElement("beforeend", articleDom);
  articleDom.insertAdjacentElement("afterend", articleJs);
};

window.addEventListener('load', function(){
  alert("Pick up from select");
})
