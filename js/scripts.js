//// VARIABLES

const menuTopButtons = document.querySelectorAll('.comp__menu__top-btn');
const menu_1_ListButtons = document.querySelectorAll('.comp__menu--1 .comp__menu__btn');
const menu_2_ListButtons = document.querySelectorAll('.comp__menu--2 .comp__menu__btn');
const menu_3_ListButtons = document.querySelectorAll('.comp__menu--3 .comp__menu__btn');
const menus = document.querySelectorAll('.comp__menu');
const menuLists = document.querySelectorAll('.comp__menu__list');
const menuList_1 = document.querySelector('.comp__menu__list--1');
const menuList_2 = document.querySelector('.comp__menu__list--2');
const menuList_3 = document.querySelector('.comp__menu__list--3');
const questionMarks = document.querySelectorAll('.comp__feature-title__question-mark');



//// MAIN SCRIPTS

// ** Menu top buttons
// toggle list visibility and rotate chevron

menuTopButtons.forEach(el => {
  el.addEventListener('click', function() {
    this.nextElementSibling.classList.toggle('displayNone');
    this.lastElementChild.classList.toggle('rotateChevron');
  })
})

menus.forEach(el => {
  el.addEventListener('mouseleave', function() {
    this.lastElementChild.classList.add('displayNone');
    this.firstElementChild.lastElementChild.classList.remove('rotateChevron');
  }) 
})


// ** Menu list buttons
// select vacuum and add approval mark

const selectVacuum = function() {
  // remove any approval mark
  const listItems = this.parentElement.parentElement.children;
  Array.from(listItems).forEach(elem => elem.firstElementChild.firstElementChild.classList.add('displayNone'));
  // add approval mark to selected item
  this.firstElementChild.classList.remove('displayNone');
  // hide menu list
  this.parentElement.parentElement.classList.add('displayNone');
  // in menu top button window show name of the selected vacuum 
  const name = this.textContent;
  this.parentElement.parentElement.previousElementSibling.firstChild.textContent = name;
}

menu_1_ListButtons.forEach(el => {
  el.addEventListener('click', selectVacuum);
})

menu_2_ListButtons.forEach(el => {
  el.addEventListener('click', selectVacuum);
})

menu_3_ListButtons.forEach(el => {
  el.addEventListener('click', selectVacuum);
})


// ** Show/hide question mark tooltip **

questionMarks.forEach(el => {
  el.addEventListener('click', function() {
    this.firstElementChild.classList.toggle('displayNone');
  })
})

questionMarks.forEach(el => {
  el.addEventListener('mouseenter', function() {
    this.firstElementChild.classList.remove('displayNone');
  })
})

questionMarks.forEach(el => {
  el.addEventListener('mouseleave', function() {
    this.firstElementChild.classList.add('displayNone');
  })
})


/// JSON SCRIPTS

let requestURL = 'https://roborock-compare.k-son.eu/roborock_compare.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


request.onload = function() {
  roborockCompareObject = request.response;
  buildMenus(roborockCompareObject);
}

function buildMenus(obj) {
  const devices = obj.devices;

  for (let j=0; j<menuLists.length; j++) {
    for (let i=0; i<devices.length; i++) {
      const listItem = document.createElement('li');
      listItem.classList.add('comp__menu__list-item');
  
      const button = document.createElement('button');
      button.classList.add('comp__menu__btn');
      button.textContent = devices[i].name;
  
      const span = document.createElement('span');
      span.classList.add('comp__selected-vacuum');
      span.classList.add('displayNone');
  
      button.appendChild(span);
      listItem.appendChild(button);
  
      menuLists[j].appendChild(listItem);
    }
  }
}
