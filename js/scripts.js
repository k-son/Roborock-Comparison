//// VARIABLES
const menus = document.querySelectorAll('.comp__menu');
const menuLists = document.querySelectorAll('.comp__menu__list');
const menuTopButtons = document.querySelectorAll('.comp__menu__top-btn');
const menuList_1 = document.querySelector('.comp__menu__list--1');
const menuList_2 = document.querySelector('.comp__menu__list--2');
const menuList_3 = document.querySelector('.comp__menu__list--3');
const questionMarks = document.querySelectorAll('.comp__feature-title__question-mark');

let devices; // vacuum objects from json file

let selectedVacuumObject; // to store just selected (from menu list) vacuum object

const featuresColumn_1 = document.querySelectorAll('.comp__feature-exists--1');
const featuresColumn_2 = document.querySelectorAll('.comp__feature-exists--2');
const featuresColumn_3 = document.querySelectorAll('.comp__feature-exists--3');

// features' fields
const image_1 = document.getElementById('comp__vacuums__image--1');
const image_2 = document.getElementById('comp__vacuums__image--2');
const image_3 = document.getElementById('comp__vacuums__image--3');
const image = [image_1, image_2, image_3];

const vacName_1 = document.getElementById('comp__vacuums__h2--1');
const vacName_2 = document.getElementById('comp__vacuums__h2--2');
const vacName_3 = document.getElementById('comp__vacuums__h2--3');
const vacName = [vacName_1, vacName_2, vacName_3];

const linkURL_1 = document.getElementById('comp__vacuums__more-btn--1');
const linkURL_2 = document.getElementById('comp__vacuums__more-btn--2');
const linkURL_3 = document.getElementById('comp__vacuums__more-btn--3');
const linkURL = [linkURL_1, linkURL_2, linkURL_3];

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

const suction_1 = document.getElementById('suction-1');
const suction_2 = document.getElementById('suction-2');
const suction_3 = document.getElementById('suction-3');
const suction = [suction_1, suction_2, suction_3];

const runtime_1 = document.getElementById('runtime-1');
const runtime_2 = document.getElementById('runtime-2');
const runtime_3 = document.getElementById('runtime-3');
const runtime = [runtime_1, runtime_2, runtime_3];

const roomSelectiveCleaning_1 = document.getElementById('roomSelectiveCleaning--1');
const roomSelectiveCleaning_2 = document.getElementById('roomSelectiveCleaning--2');
const roomSelectiveCleaning_3 = document.getElementById('roomSelectiveCleaning--3');
const roomSelectiveCleaning = [roomSelectiveCleaning_1, roomSelectiveCleaning_2, roomSelectiveCleaning_3];

const intelligentZoning_1 = document.getElementById('intelligentZoning--1');
const intelligentZoning_2 = document.getElementById('intelligentZoning--2');
const intelligentZoning_3 = document.getElementById('intelligentZoning--3');
const intelligentZoning = [intelligentZoning_1, intelligentZoning_2, intelligentZoning_3];

const filterDetection_1 = document.getElementById('filterDetection--1');
const filterDetection_2 = document.getElementById('filterDetection--2');
const filterDetection_3 = document.getElementById('filterDetection--3');
const filterDetection = [filterDetection_1, filterDetection_2, filterDetection_3];


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

  // in menu top button show vacuum name and, next to it, approval mark
  for (let i=0; i<menuTopButtons.length; i++) {
    menuTopButtons[i].firstChild.textContent = devices[i].name;
    menuTopButtons[i].nextElementSibling.children[i].firstElementChild.lastElementChild.classList.remove('displayNone');
  }

  // show vacuum features
  for (let i=0; i<=2; i++) {
    showSelectedVacuum(i, devices[i]);
    ifFeaturesExist(i, devices[i]);
    populateFeatures(i, devices[i]);
  }
}


function buildMenus(obj) {
  devices = obj.devices; // devices array containing all vacuums objects, retrived from roborock_compare.json

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
  const menu_1_ListButtons = document.querySelectorAll('.comp__menu--1 .comp__menu__btn');
  const menu_2_ListButtons = document.querySelectorAll('.comp__menu--2 .comp__menu__btn');
  const menu_3_ListButtons = document.querySelectorAll('.comp__menu--3 .comp__menu__btn');

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
}


function handleFeatures_1() {
  featuresColumn_1.forEach(el => el.classList.add('hideCompareFeature'));
  showSelectedVacuum(0, selectedVacuumObject[0]);
  ifFeaturesExist(0, selectedVacuumObject[0]);
  populateFeatures(0, selectedVacuumObject[0]);
}

function handleFeatures_2() {
  featuresColumn_2.forEach(el => el.classList.add('hideCompareFeature'));
  showSelectedVacuum(1, selectedVacuumObject[0]);
  ifFeaturesExist(1, selectedVacuumObject[0]);
  populateFeatures(1, selectedVacuumObject[0]);
}

function handleFeatures_3() {
  featuresColumn_3.forEach(el => el.classList.add('hideCompareFeature'));
  showSelectedVacuum(2, selectedVacuumObject[0]);
  ifFeaturesExist(2, selectedVacuumObject[0]);
  populateFeatures(2, selectedVacuumObject[0]);
}


// show items image, name and add link to button
function showSelectedVacuum(col, obj) {
  image[col].src = obj.image;
  vacName[col].textContent = obj.name;
  linkURL[col].href = obj.webpage;
}


// show approval mark if vacuum has that feature
function ifFeaturesExist(col, obj) {
  if (obj.roomselectivecleaning === true) {
    roomSelectiveCleaning[col].classList.remove('hideCompareFeature');
  }
  if (obj.roomselectivecleaning === true) {
    intelligentZoning[col].classList.remove('hideCompareFeature');
  }
  if (obj.roomselectivecleaning === true) {
    filterDetection[col].classList.remove('hideCompareFeature');
  }
}


// fill with value
function populateFeatures(col, obj) {
  battery[col].textContent = obj.batterycapacity;
  volume[col].textContent = obj.volume;
  area[col].textContent = obj.suitablearea;
  power[col].textContent = obj.ratedpower;
  dustbin[col].textContent = obj.dustbincapacity;
  suction[col].textContent = obj.suction;
  runtime[col].textContent = obj.runtime;
}


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