let articleDom = document.createElement("article");
let articleJs = document.createElement("article");
articleDom.style.color = "white";
const target = document.getElementById("findTarget");
const contentFill = document.querySelector(".content");
const pickDialog = document.querySelector('.pickDialog')

const demodom1 = `<div class='demo' id='demo'>
                    <ul>
                      <li>baseball</li>
                      <li class='li-2'>tennis</li>
                      <li>soccer</li>
                    </ul>
                  </div>`;
const demojs1 = `document.querySelector('div ul li.li-2')`;
const demojs2 = `document.querySelectorAll('div ul li')`;
const demojs3 = `document.getElementById('demo').classList.add('demo')
                 document.getElementById('demo').classList.toggle('demo')
                 document.getElementById('demo').classList.remove('demo')
                 document.getElementById('demo').classList.replace('demo', 'demo1')
                 document.getElementById('demo').classList.contains('demo1')
                 document.getElementById('demo').classList.item(0)
                `;
const demojs4 = `document.querySelector('div ul li.li-2').innerHTML = '<p>soccer is the best</p>'
                 document.querySelector('div ul li.li-2').innerText = 'soccer is the best'
                 document.querySelector('div ul li.li-2').textContent = 'soccer is the best'
                `;
const demojs5 = `
                  let node = document.createElement("option");
                  node.innerHTML = "appendChild";
                  node.value = 5;
                  document.querySelector('div ul').appendChild(node);
                `;

const demojs6 = `<div><a href="https://grrr.tech/posts/create-dom-node-from-html-string/"></a></div>`;
const demojs7 = `<div><p>See more at https://grrr.tech/posts/create-dom-node-from-html-string/</p></div>`;


target.onchange = function () {
  articleDom.innerText = demodom1;
  articleJs.style.color = "#0dec7b";
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
    case "5":
      articleJs.innerText = demojs5;
      break
    case "6":
      articleJs.innerText = ''
      const divDom6 = new DOMParser().parseFromString(demojs6, 'text/html').body.firstElementChild;
      const bubble6 = makeBubble()
      bubble6.innerText = `You just created ` + divDom6.nodeName + ">" + divDom6.firstElementChild.nodeName;
      articleJs.appendChild(bubble6)
      break;
    case "7":
      articleJs.innerText = ''
      const divDom7 = document.createRange().createContextualFragment(demojs7).firstElementChild;
      const bubble7 = makeBubble();
      bubble7.innerText = `You just created ` + divDom7.nodeName + ">" + divDom7.firstElementChild.nodeName
      articleJs.appendChild(bubble7)
      break
    default:
      articleJs.textContent = ''
      pickDialog.showModal()
      pickDialog.firstElementChild.textContent = `No item selected`
  }
  contentFill.insertAdjacentElement("beforeend", articleDom)
  articleDom.insertAdjacentElement("afterend", articleJs)
};

window.addEventListener('load', function () {
  alert("Pick up from select");
})

document.addEventListener("keydown", (event) => {
  if (document.hasFocus()) {
    if (event.key === 'Enter' && event.srcElement.nodeName === 'SELECT') {
      console.log("Enter keyborad got hit");
      // automaticlly select first item, show off the select curtain
      // Tip: There's no need to do the work, Keyboard users can hit Up or Down after select element focused(hit tab)
    }
  }
})

document.querySelector(".close").addEventListener('click', () => {
  pickDialog.close()
})

function makeBubble() {
  const p = document.createElement('p')
  p.classList.add('bubble')
  p.style.border = 'solid 2px teal'
  return p
}
