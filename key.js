// Create two article dom for left and right part of window

class articleMaking {
  constructor(name, color){
    this.dom = document.createElement(name)
    this.name = name
    this.color = color
  }
  colorit() {
    this.dom.style.color = this.color
  }
  contontIt(value) {
    if(value){
      this.dom.innerText = value
    }else{
      this.dom.innerText = null
    }
  }
  appendChildNode(node) {
    this.dom.appendChild(node)
  }
}

const arty_1 = new articleMaking("article", "black")
arty_1.colorit()

const arty_2 = new articleMaking("article", "rgb(115, 105, 255)")
arty_2.colorit()

const target = document.getElementById("findTarget")
const contentFill = document.querySelector(".content")
const pickDialog = document.querySelector('.pickDialog')

const demodom = `<div class='demo' id='demo'>
                    <ul>
                      <li>baseball</li>
                      <li class='li-2'>tennis</li>
                      <li>soccer</li>
                    </ul>
                  </div>`

const demojs1 = `document.querySelector('div ul li.li-2')`
const demojs2 = `document.querySelectorAll('div ul li')`
const demojs3 = `document.getElementById('demo').classList.add('demo')
                 document.getElementById('demo').classList.toggle('demo')
                 document.getElementById('demo').classList.remove('demo')
                 document.getElementById('demo').classList.replace('demo', 'demo1')
                 document.getElementById('demo').classList.contains('demo1')
                 document.getElementById('demo').classList.item(0)
                `
const demojs4 = `document.querySelector('div ul li.li-2').innerHTML = '<p>soccer is the best</p>'
                 document.querySelector('div ul li.li-2').innerText = 'soccer is the best'
                 document.querySelector('div ul li.li-2').textContent = 'soccer is the best'
                `
const demojs5 = `
                  let node = document.createElement("option");
                  node.innerHTML = "appendChild";
                  node.value = 5;
                  document.querySelector('div ul').appendChild(node);
                `
const demojs6 = `<div><a href="https://grrr.tech/posts/create-dom-node-from-html-string/"></a></div>`
const demojs7 = `<div><p>See more at https://grrr.tech/posts/create-dom-node-from-html-string/</p></div>`


target.onchange = function () {
  arty_1.dom.innerText = demodom
  switch (target.value) {
    case "1":
      arty_2.contontIt(demojs1)
      break
    case "2":
      arty_2.contontIt(demojs2)
      break
    case "3":
      arty_2.contontIt(demojs3)
      break
    case "4":
      arty_2.contontIt(demojs4)
      break
    case "5":
      arty_2.contontIt(demojs5)
      break
    case "6":
      arty_2.contontIt()
      const divDom6 = new DOMParser().parseFromString(demojs6, 'text/html').body.firstElementChild
      const bubble6 = makeBubble()
      bubble6.innerText = `You just created ` + divDom6.nodeName + ">" + divDom6.firstElementChild.nodeName
      arty_2.appendChildNode(bubble6)
      break
    case "7":
      arty_2.contontIt()
      const divDom7 = document.createRange().createContextualFragment(demojs7).firstElementChild
      const bubble7 = makeBubble()
      bubble7.innerText = `You just created ` + divDom7.nodeName + ">" + divDom7.firstElementChild.nodeName
      arty_2.appendChildNode(bubble7)
      break
    default:
      document.querySelector("button.close").style.visibility = 'visible'
      arty_2.contontIt()
      // TODO showModal function doesn't work on safari
      pickDialog.showModal()
      pickDialog.firstElementChild.textContent = `No item selected`
  }
  contentFill.insertAdjacentElement("beforeend", arty_1.dom)
  arty_1.dom.insertAdjacentElement("afterend", arty_2.dom)
};

window.addEventListener('load', function () {
  alert("Pick up from select")
})

document.addEventListener("keydown", (event) => {
  if (document.hasFocus()) {
    if (event.key === 'Enter' && event.srcElement.nodeName === 'SELECT') {
      console.log("Enter keyborad got hit")
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

// input datalist
document.getElementById("input-list").addEventListener('change', (e) => {
  document.querySelector(".inputList>p").textContent = `${e.target.value}`
})