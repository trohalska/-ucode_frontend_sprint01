'use strict';

"use strict"

let list = document.querySelector("#cookie-list");
let textElement = document.querySelector("#input-text");
let cookieNumber = 0;

listCookies();

function listCookies() {
  let allCookies = document.cookie.split(';');

  if (!allCookies || (allCookies[0] === "" && allCookies.length <= 1)) {
    let p = document.createElement("p");

    p.textContent = "[Empty]";
    list.append(p);
  }
  else {
    for (let i = 0; i < allCookies.length; i++) {
      let value = allCookies[i].split('=');
      if (value[1]) {
        let p = document.createElement("p");

        p.textContent = `--> ${value[1]}`;
        list.append(p);
        cookieNumber++;
      }
    }
  }
}

function clearCookies() {
  if (confirm("Are you sure?")) {
    let cookieList = document.querySelectorAll("#cookie-list > p");

    for (let i = 0; i < cookieList.length; i++)
      cookieList[i].remove();

    let emptyP = document.createElement("p");
    emptyP.textContent = "[Empty]";
    document.querySelector("#cookie-list").append(emptyP);

    let allCookies = document.cookie.split(';');

    if (allCookies.length !== 0) {
      for (let i = 0; i < allCookies.length; i++) {
        let value = allCookies[i].split('=');
        if (value[0]) {
          document.cookie = `${value[0]}=;expires=Thu, 01 Jan 1970 00:00:00 GMT"`;
        }
      }
    }
    cookieNumber = 0;
  }
}

function addToCookies() {
  if (textElement) {
    let text = textElement.value.trim();

    if (text.length === 0) {
      alert(`It's empty. Try to input something in \"Text input\".`);
    }
    else {
      let date = new Date(Date.now() + 2592000e3);
      let p = document.createElement("p");

      date = date.toUTCString();
      document.cookie = `${"" + cookieNumber}=${text};path=/; expires=" + ${date}"`;
      if (cookieNumber === 0)
        list.children[0].remove();
      cookieNumber++;
      p.textContent = "--> " + text;
      list.append(p);
      textElement.value = "";
    }
  }
}
