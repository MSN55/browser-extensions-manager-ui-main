let content = document.querySelector(".content");
let activeAll = document.querySelector(".all");
let activeBtn = document.querySelector(".activeBtn");
let inactiveBtn = document.querySelector(".inactive");
let them = document.querySelector(".them");
let themLayout = document.querySelector(".themLayout");

async function loadData() {
  let response = await fetch("data.json");
  let dataJson = await response.json();
  return dataJson;
}
async function main() {
  data = await loadData();
  for (let i = 0; i < data.length; i++) {
    let div = document.createElement("div");
    div.className = "element ";

    let img = document.createElement("img");
    img.className = "icon";
    img.src = data[i].logo;

    let h3 = document.createElement("h3");
    h3.className = "title";
    h3.textContent = data[i].name;

    let p = document.createElement("p");
    p.className = "description";
    p.textContent = data[i].description;

    let removeBtn = document.createElement("div");
    removeBtn.className = "remove";
    removeBtn.textContent = "Remove";

    let active_ele = document.createElement("div");
    active_ele.className = "nonActive";
    active_ele.textContent = "";
    content.appendChild(div);
    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(removeBtn);
    div.appendChild(active_ele);
    div.classList.add("dark");
    content.classList.add("dark");

    if (data[i].isActive == true) {
      active_ele.className = "active";
      active_ele.style.cssText = "background-color: var(--Red500);";
      div.classList.add("activeEl");
    } else {
      div.classList.add("inactiveEl");
    }
  }
  let element = document.querySelectorAll(".element");
  let activeEl = document.querySelectorAll(".activeEl");
  let inactiveEl = document.querySelectorAll(".inactiveEl");

  activeAll.addEventListener("click", function () {
    element.forEach((ele) => (ele.style.display = "block"));
    activeAll.classList.add("selected");
    activeBtn.classList.remove("selected");
    inactiveBtn.classList.remove("selected");
  });

  activeBtn.addEventListener("click", function () {
    activeEl.forEach((ele) => (ele.style.display = "block"));
    inactiveEl.forEach((ele) => (ele.style.display = "none"));
    activeBtn.classList.add("selected");
    activeAll.classList.remove("selected");
    inactiveBtn.classList.remove("selected");
  });

  inactiveBtn.addEventListener("click", function () {
    activeEl.forEach((ele) => (ele.style.display = "none"));
    inactiveEl.forEach((ele) => (ele.style.display = "block"));
    inactiveBtn.classList.add("selected");
    activeAll.classList.remove("selected");
    activeBtn.classList.remove("selected");
  });

  them.addEventListener("click", function () {
    element.forEach((ele) => ele.classList.toggle("light"));
    content.classList.toggle("light");
    if (content.classList.contains("light")) {
      them.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 22 22"><g clip-path="url(#a)"><path stroke="#091540" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.98" d="M20.125 11.877A7.333 7.333 0 1 1 10.124 1.875a9.168 9.168 0 1 0 10.001 10.002Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h22v22H0z"/></clipPath></defs></svg>';
      themLayout.innerHTML = '<link rel="stylesheet" href="css/light.css" >';
    } else {
      them.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 22 22"><g clip-path="url(#a)"><path stroke="#FBFDFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.98" d="M11 1.833v1.834m0 14.666v1.834M3.667 11H1.833m3.955-5.212L4.492 4.492m11.72 1.296 1.297-1.296M5.788 16.215l-1.296 1.296m11.72-1.296 1.297 1.296M20.167 11h-1.834m-2.75 0a4.583 4.583 0 1 1-9.167 0 4.583 4.583 0 0 1 9.167 0Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h22v22H0z"/></clipPath></defs></svg>';
      themLayout.innerHTML = '<link rel="stylesheet" href="css/dark.css" >';
    }
  });
}

main();
