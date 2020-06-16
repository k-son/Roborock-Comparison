//// VARIABLES

const menuTopButtons = document.querySelectorAll('.comp__menu__top-btn');
const menu_1_ListButtons = document.querySelectorAll('.comp__menu--1 .comp__menu__btn');
const menu_2_ListButtons = document.querySelectorAll('.comp__menu--2 .comp__menu__btn');
const menu_3_ListButtons = document.querySelectorAll('.comp__menu--3 .comp__menu__btn');
const menus = document.querySelectorAll('.comp__menu');
const menuLists = document.querySelectorAll('.comp__menu__list');
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

