//// VARIABLES

const menus = document.querySelectorAll('.comp__menu');
const menuLists = document.querySelectorAll('.comp__menu__list');
const menuTopButtons = document.querySelectorAll('.comp__menu__top-btn');
const menuList_1 = document.querySelector('.comp__menu__list--1');
const menuList_2 = document.querySelector('.comp__menu__list--2');
const menuList_3 = document.querySelector('.comp__menu__list--3');
const questionMarks = document.querySelectorAll('.comp__feature-title__question-mark');

let devices; // vacuum objects from json file

// tu a moze w funkcji je zadeklarowac?
let menu_1_ListButtons;
let menu_2_ListButtons;
let menu_3_ListButtons;

let selectedVacuumObject; // to store just selected (from menu list) vacuum object


const featuresColumn_1 = document.querySelectorAll('.comp__feature-exists--1');
const featuresColumn_2 = document.querySelectorAll('.comp__feature-exists--2');
const featuresColumn_3 = document.querySelectorAll('.comp__feature-exists--3');
//const featuresColumnArray = [featuresColumn_1, featuresColumn_2, featuresColumn_3];

// features' fields
const battery_1 = document.getElementById('battery-1');
const battery_2 = document.getElementById('battery-2');
const battery_3 = document.getElementById('battery-3');
const battery = [battery_1, battery_2, battery_3];

const volume_1 = document.getElementById('volume-1');
const volume_2 = document.getElementById('volume-2');
const volume_3 = document.getElementById('volume-3');
const volume = [volume_1, volume_2, volume_3];

const area_1 = document.getElementById('area-1');
const area_2 = document.getElementById('area-2');
const area_3 = document.getElementById('area-3');
const area = [area_1, area_2, area_3];

const power_1 = document.getElementById('power-1');
const power_2 = document.getElementById('power-2');
const power_3 = document.getElementById('power-3');
const power = [power_1, power_2, power_3];

const dustbin_1 = document.getElementById('dustbin-1');
const dustbin_2 = document.getElementById('dustbin-2');
const dustbin_3 = document.getElementById('dustbin-3');
const dustbin = [dustbin_1, dustbin_2, dustbin_3];


//// MAIN SCRIPTS

/// RETRIVE JSON
let requestURL = 'https://roborock-compare.k-son.eu/roborock_compare.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


request.onload = function() {
  const roborockCompareObject = request.response;
  buildMenus(roborockCompareObject);
}

function buildMenus(obj) {
  devices = obj.devices; // devices? - take a glance at the json file

  // build menus
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

  // retrive menu buttons and attach event listeners to them
  menu_1_ListButtons = document.querySelectorAll('.comp__menu--1 .comp__menu__btn');
  menu_2_ListButtons = document.querySelectorAll('.comp__menu--2 .comp__menu__btn');
  menu_3_ListButtons = document.querySelectorAll('.comp__menu--3 .comp__menu__btn');

  menu_1_ListButtons.forEach(el => {
    el.addEventListener('click', selectVacuum);
    el.addEventListener('click', handleFeatures_1);
  })

  menu_2_ListButtons.forEach(el => {
    el.addEventListener('click', selectVacuum);
    el.addEventListener('click', handleFeatures_2);
  })
  
  menu_3_ListButtons.forEach(el => {
    el.addEventListener('click', selectVacuum);
    el.addEventListener('click', handleFeatures_3);
  })

}


// po wyborze device wypelnic odpowiednie pola

// wybrac device dla kazego menu przy starcie

// w kazdym okienku inny device 




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

function selectVacuum() {
  // remove any approval mark
  const listItems = this.parentElement.parentElement.children;
  Array.from(listItems).forEach(elem => elem.firstElementChild.firstElementChild.classList.add('displayNone'));
  // add approval mark to selected item
  this.firstElementChild.classList.remove('displayNone');
  // hide menu list
  this.parentElement.parentElement.classList.add('displayNone');
  // in menu top button window show name of the selected vacuum 
  const vacuumName = this.textContent;
  this.parentElement.parentElement.previousElementSibling.firstChild.textContent = vacuumName;

  // find selected object
  selectedVacuumObject = devices.filter(el => el.name === vacuumName);


  // populate features
  // clear previous value first 
  // ***

  /*
  const volumeValue = document.createElement('span');
  volumeValue.textContent = selectedVacuumObject[0].volume;
  volumeValue.classList.add('comp__grid-column-2');
  volumeFeature.appendChild(volumeValue);
  */

  // jeżeli funkcja selectVacuum_1 a może uda się selectVacuum(1) to 
  // wszystim ficzerom z kolumny 1 (comp__feature-exists--1) które jeszcze nie mają klasy 'hideCompareFeature' tę klasę nadajemy
  // a później usuwamy klasę 'hideCompareFeature' z tych ficzerów które w tym egzemplarzu istnieją (tu wybieramy je po id chyba, id które ma końcówkę --1)
  // ficzery tekstowe wypełniamy tekstem nowym
  
  

}

// do rozbudowy patrz wyżej instrukcje
function handleFeatures_1() {
  featuresColumn_1.forEach(el => el.classList.remove('hideCompareFeature'));
  populateFeatures(0);

}

function handleFeatures_2() {
  featuresColumn_2.forEach(el => el.classList.remove('hideCompareFeature'));
  populateFeatures(1);
}

function handleFeatures_3() {
  featuresColumn_3.forEach(el => el.classList.remove('hideCompareFeature'));
  populateFeatures(2);
}


function populateFeatures(i) {
  battery[i].textContent = selectedVacuumObject[0].batterycapacity;
  volume[i].textContent = selectedVacuumObject[0].volume;
  area[i].textContent = selectedVacuumObject[0].suitablearea;
  power[i].textContent = selectedVacuumObject[0].ratedpower;
  dustbin[i].textContent = selectedVacuumObject[0].dustbincapacity;
}




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