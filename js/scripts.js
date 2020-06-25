"use strict";

//// VARIABLES

const menus = document.querySelectorAll('.comp__menu');
const menuLists = document.querySelectorAll('.comp__menu__list');
const menuTopButtons = document.querySelectorAll('.comp__menu__top-btn');
const menuList_1 = document.querySelector('.comp__menu__list--1');
const menuList_2 = document.querySelector('.comp__menu__list--2');
const menuList_3 = document.querySelector('.comp__menu__list--3');

const featureTitles = document.querySelectorAll('.comp__feature-title');
const questionMarks = document.querySelectorAll('.comp__feature-title__question-mark');

let devices; // vacuum objects from json file

let selectecVacuumName; // name of just selected vacuum
let selectedVacuumObject; // to store just selected (from menu list) vacuum object

const featuresColumn_1 = document.querySelectorAll('.comp__feature-exists--1');
const featuresColumn_2 = document.querySelectorAll('.comp__feature-exists--2');
const featuresColumn_3 = document.querySelectorAll('.comp__feature-exists--3');
const featuresColumn = [featuresColumn_1, featuresColumn_2, featuresColumn_3];


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

const adaptiveRouteAlgorithm_1 = document.getElementById('adaptiveRouteAlgorithm--1');
const adaptiveRouteAlgorithm_2 = document.getElementById('adaptiveRouteAlgorithm--2');
const adaptiveRouteAlgorithm_3 = document.getElementById('adaptiveRouteAlgorithm--3');
const adaptiveRouteAlgorithm = [adaptiveRouteAlgorithm_1, adaptiveRouteAlgorithm_2, adaptiveRouteAlgorithm_3];

const selectiveRoomCleaning_1 = document.getElementById('selectiveRoomCleaning--1');
const selectiveRoomCleaning_2 = document.getElementById('selectiveRoomCleaning--2');
const selectiveRoomCleaning_3 = document.getElementById('selectiveRoomCleaning--3');
const selectiveRoomCleaning = [selectiveRoomCleaning_1, selectiveRoomCleaning_2, selectiveRoomCleaning_3];

const ldsLaserNavigation_1 = document.getElementById('ldsLaserNavigation--1');
const ldsLaserNavigation_2 = document.getElementById('ldsLaserNavigation--2');
const ldsLaserNavigation_3 = document.getElementById('ldsLaserNavigation--3');
const ldsLaserNavigation = [ldsLaserNavigation_1, ldsLaserNavigation_2, ldsLaserNavigation_3];

const highPrecisionMap_1 = document.getElementById('highPrecisionMap--1');
const highPrecisionMap_2 = document.getElementById('highPrecisionMap--2');
const highPrecisionMap_3 = document.getElementById('highPrecisionMap--3');
const highPrecisionMap = [highPrecisionMap_1, highPrecisionMap_2, highPrecisionMap_3];

const mapSaving_1 = document.getElementById('mapSaving--1');
const mapSaving_2 = document.getElementById('mapSaving--2');
const mapSaving_3 = document.getElementById('mapSaving--3');
const mapSaving = [mapSaving_1, mapSaving_2, mapSaving_3];

const multipleMapSaving_1 = document.getElementById('multipleMapSaving--1');
const multipleMapSaving_2 = document.getElementById('multipleMapSaving--2');
const multipleMapSaving_3 = document.getElementById('multipleMapSaving--3');
const multipleMapSaving = [multipleMapSaving_1, multipleMapSaving_2, multipleMapSaving_3];

const zoneCleanup_1 = document.getElementById('zoneCleanup--1');
const zoneCleanup_2 = document.getElementById('zoneCleanup--2');
const zoneCleanup_3 = document.getElementById('zoneCleanup--3');
const zoneCleanup = [zoneCleanup_1, zoneCleanup_2, zoneCleanup_3];

const realTimeRobotLocation_1 = document.getElementById('realTimeRobotLocation--1');
const realTimeRobotLocation_2 = document.getElementById('realTimeRobotLocation--2');
const realTimeRobotLocation_3 = document.getElementById('realTimeRobotLocation--3');
const realTimeRobotLocation = [realTimeRobotLocation_1, realTimeRobotLocation_2, realTimeRobotLocation_3];

const appControl_1 = document.getElementById('appControl--1');
const appControl_2 = document.getElementById('appControl--2');
const appControl_3 = document.getElementById('appControl--3');
const appControl = [appControl_1, appControl_2, appControl_3];

const voiceControl_1 = document.getElementById('voiceControl--1');
const voiceControl_2 = document.getElementById('voiceControl--2');
const voiceControl_3 = document.getElementById('voiceControl--3');
const voiceControl = [voiceControl_1, voiceControl_2, voiceControl_3];

const color_1_white = document.getElementById('color--1--white');
const color_1_pink = document.getElementById('color--1--pink');
const color_1_black = document.getElementById('color--1--black');
const color_2_white = document.getElementById('color--2--white');
const color_2_pink = document.getElementById('color--2--pink');
const color_2_black = document.getElementById('color--2--black');
const color_3_white = document.getElementById('color--3--white');
const color_3_pink = document.getElementById('color--3--pink');
const color_3_black = document.getElementById('color--3--black');
const color_1 = [color_1_white, color_1_pink, color_1_black];
const color_2 = [color_2_white, color_2_pink, color_2_black];
const color_3 = [color_3_white, color_3_pink, color_3_black];
const color = [color_1, color_2, color_3];

const dualElectronicCompasses_1 = document.getElementById('dualElectronicCompasses--1');
const dualElectronicCompasses_2 = document.getElementById('dualElectronicCompasses--2');
const dualElectronicCompasses_3 = document.getElementById('dualElectronicCompasses--3');
const dualElectronicCompasses = [dualElectronicCompasses_1, dualElectronicCompasses_2, dualElectronicCompasses_3];

const inertialNavigation_1 = document.getElementById('inertialNavigation--1');
const inertialNavigation_2 = document.getElementById('inertialNavigation--2');
const inertialNavigation_3 = document.getElementById('inertialNavigation--3');
const inertialNavigation = [inertialNavigation_1, inertialNavigation_2, inertialNavigation_3];

const cliffSensor_1 = document.getElementById('cliffSensor--1');
const cliffSensor_2 = document.getElementById('cliffSensor--2');
const cliffSensor_3 = document.getElementById('cliffSensor--3');
const cliffSensor = [cliffSensor_1, cliffSensor_2, cliffSensor_3];

const obstacleRecognition_1 = document.getElementById('obstacleRecognition--1');
const obstacleRecognition_2 = document.getElementById('obstacleRecognition--2');
const obstacleRecognition_3 = document.getElementById('obstacleRecognition--3');
const obstacleRecognition = [obstacleRecognition_1, obstacleRecognition_2, obstacleRecognition_3];

const moppingFunction_1 = document.getElementById('moppingFunction--1');
const moppingFunction_2 = document.getElementById('moppingFunction--2');
const moppingFunction_3 = document.getElementById('moppingFunction--3');
const moppingFunction = [moppingFunction_1, moppingFunction_2, moppingFunction_3];

const carpetBoostMode_1 = document.getElementById('carpetBoostMode--1');
const carpetBoostMode_2 = document.getElementById('carpetBoostMode--2');
const carpetBoostMode_3 = document.getElementById('carpetBoostMode--3');
const carpetBoostMode = [carpetBoostMode_1, carpetBoostMode_2, carpetBoostMode_3];

const customizedWaterAndSuctionOfRoom_1 = document.getElementById('customizedWaterAndSuctionOfRoom--1');
const customizedWaterAndSuctionOfRoom_2 = document.getElementById('customizedWaterAndSuctionOfRoom--2');
const customizedWaterAndSuctionOfRoom_3 = document.getElementById('customizedWaterAndSuctionOfRoom--3');
const customizedWaterAndSuctionOfRoom = [customizedWaterAndSuctionOfRoom_1, customizedWaterAndSuctionOfRoom_2, customizedWaterAndSuctionOfRoom_3];

const autoRecharg_1 = document.getElementById('autoRecharg--1');
const autoRecharg_2 = document.getElementById('autoRecharg--2');
const autoRecharg_3 = document.getElementById('autoRecharg--3');
const autoRecharg = [autoRecharg_1, autoRecharg_2, autoRecharg_3];

const topupCharging_1 = document.getElementById('topupCharging--1');
const topupCharging_2 = document.getElementById('topupCharging--2');
const topupCharging_3 = document.getElementById('topupCharging--3');
const topupCharging = [topupCharging_1, topupCharging_2, topupCharging_3];

const overTheAirUpgrades_1 = document.getElementById('overTheAirUpgrades--1');
const overTheAirUpgrades_2 = document.getElementById('overTheAirUpgrades--2');
const overTheAirUpgrades_3 = document.getElementById('overTheAirUpgrades--3');
const overTheAirUpgrades = [overTheAirUpgrades_1, overTheAirUpgrades_2, overTheAirUpgrades_3];

const doNotDisturb_1 = document.getElementById('doNotDisturb--1');
const doNotDisturb_2 = document.getElementById('doNotDisturb--2');
const doNotDisturb_3 = document.getElementById('doNotDisturb--3');
const doNotDisturb = [doNotDisturb_1, doNotDisturb_2, doNotDisturb_3];

const wifiConnectivity_1 = document.getElementById('wifiConnectivity--1');
const wifiConnectivity_2 = document.getElementById('wifiConnectivity--2');
const wifiConnectivity_3 = document.getElementById('wifiConnectivity--3');
const wifiConnectivity = [wifiConnectivity_1, wifiConnectivity_2, wifiConnectivity_3];

const voicePack_1 = document.getElementById('voicePack--1');
const voicePack_2 = document.getElementById('voicePack--2');
const voicePack_3 = document.getElementById('voicePack--3');
const voicePack = [voicePack_1, voicePack_2, voicePack_3];

const washableDustbin_1 = document.getElementById('washableDustbin--1');
const washableDustbin_2 = document.getElementById('washableDustbin--2');
const washableDustbin_3 = document.getElementById('washableDustbin--3');
const washableDustbin = [washableDustbin_1, washableDustbin_2, washableDustbin_3];

const washableE11AirFilter_1 = document.getElementById('washableE11AirFilter--1');
const washableE11AirFilter_2 = document.getElementById('washableE11AirFilter--2');
const washableE11AirFilter_3 = document.getElementById('washableE11AirFilter--3');
const washableE11AirFilter = [washableE11AirFilter_1, washableE11AirFilter_2, washableE11AirFilter_3];

const volumeBalanceMode_1 = document.getElementById('volumeBalanceMode--1');
const volumeBalanceMode_2 = document.getElementById('volumeBalanceMode--2');
const volumeBalanceMode_3 = document.getElementById('volumeBalanceMode--3');
const volumeBalanceMode = [volumeBalanceMode_1, volumeBalanceMode_2, volumeBalanceMode_3];

const volumeQuietMode_1 = document.getElementById('volumeQuietMode--1');
const volumeQuietMode_2 = document.getElementById('volumeQuietMode--2');
const volumeQuietMode_3 = document.getElementById('volumeQuietMode--3');
const volumeQuietMode = [volumeQuietMode_1, volumeQuietMode_2, volumeQuietMode_3];

const batteryCapacity_1 = document.getElementById('batteryCapacity--1');
const batteryCapacity_2 = document.getElementById('batteryCapacity--2');
const batteryCapacity_3 = document.getElementById('batteryCapacity--3');
const batteryCapacity = [batteryCapacity_1, batteryCapacity_2, batteryCapacity_3];

const suitableArea_1 = document.getElementById('suitableArea--1');
const suitableArea_2 = document.getElementById('suitableArea--2');
const suitableArea_3 = document.getElementById('suitableArea--3');
const suitableArea = [suitableArea_1, suitableArea_2, suitableArea_3];

const ratedPower_1 = document.getElementById('ratedPower--1');
const ratedPower_2 = document.getElementById('ratedPower--2');
const ratedPower_3 = document.getElementById('ratedPower--3');
const ratedPower = [ratedPower_1, ratedPower_2, ratedPower_3];

const dustbinVolume_1 = document.getElementById('dustbinVolume--1');
const dustbinVolume_2 = document.getElementById('dustbinVolume--2');
const dustbinVolume_3 = document.getElementById('dustbinVolume--3');
const dustbinVolume = [dustbinVolume_1, dustbinVolume_2, dustbinVolume_3];

const waterTankCapacity_1 = document.getElementById('waterTankCapacity--1');
const waterTankCapacity_2 = document.getElementById('waterTankCapacity--2');
const waterTankCapacity_3 = document.getElementById('waterTankCapacity--3');
const waterTankCapacity = [waterTankCapacity_1, waterTankCapacity_2, waterTankCapacity_3];

const suction_1 = document.getElementById('suction--1');
const suction_2 = document.getElementById('suction--2');
const suction_3 = document.getElementById('suction--3');
const suction = [suction_1, suction_2, suction_3];

const runtime_1 = document.getElementById('runtime--1');
const runtime_2 = document.getElementById('runtime--2');
const runtime_3 = document.getElementById('runtime--3');
const runtime = [runtime_1, runtime_2, runtime_3];



//// MAIN SCRIPTS

/// RETRIVE JSON
let requestURL = 'https://roborock-compare.k-son.eu/roborock_compare.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();



/// ONLOAD ACTIONS
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



/// BUILD DROPDOWN MENUS
function buildMenus(obj) {
  devices = obj.devices; // devices array containing all vacuums objects, retrived from roborock_compare.json

  // build menus
  for (let i=0; i<menuLists.length; i++) {
    for (let j=0; j<devices.length; j++) {

      const listItem = document.createElement('li');
      listItem.classList.add('comp__menu__list-item');

      const button = document.createElement('button');
      button.classList.add('comp__menu__btn');
      button.textContent = devices[j].name;

      const span = document.createElement('span');
      span.classList.add('comp__selected-vacuum');
      span.classList.add('displayNone');

      button.appendChild(span);
      listItem.appendChild(button);

      menuLists[i].appendChild(listItem);
    }
  }

  // retrive menus' buttons and attach event listeners to them
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



/// MENU LISTS' BUTTONS 

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
  selectecVacuumName = this.textContent;
  this.parentElement.parentElement.previousElementSibling.firstChild.textContent = selectecVacuumName;

  // find selected object
  selectedVacuumObject = devices.filter(el => el.name === selectecVacuumName);
}


function handleFeatures_1() {
  featuresColumn_1.forEach(el => el.classList.add('hideCompareFeature'));
  color_1.forEach(el => el.classList.add('hideCompareFeature'));
  showSelectedVacuum(0, selectedVacuumObject[0]);
  ifFeaturesExist(0, selectedVacuumObject[0]);
  populateFeatures(0, selectedVacuumObject[0]);
  noDuplicatedVacuums(0, 1, 2);
}

function handleFeatures_2() {
  featuresColumn_2.forEach(el => el.classList.add('hideCompareFeature'));
  color_2.forEach(el => el.classList.add('hideCompareFeature'));
  showSelectedVacuum(1, selectedVacuumObject[0]);
  ifFeaturesExist(1, selectedVacuumObject[0]);
  populateFeatures(1, selectedVacuumObject[0]);
  noDuplicatedVacuums(1, 0, 2);
}

function handleFeatures_3() {
  featuresColumn_3.forEach(el => el.classList.add('hideCompareFeature'));
  color_3.forEach(el => el.classList.add('hideCompareFeature'));
  showSelectedVacuum(2, selectedVacuumObject[0]);
  ifFeaturesExist(2, selectedVacuumObject[0]);
  populateFeatures(2, selectedVacuumObject[0]);
  noDuplicatedVacuums(2, 0, 1);
}


// show items image, name and add link to button
function showSelectedVacuum(col, obj) {
  image[col].src = obj.image;
  vacName[col].textContent = obj.name;
  linkURL[col].href = obj.webpage;
}



/// METHODS

// * show approval mark if vacuum has that feature *
function ifFeaturesExist(col, obj) {
  if (obj.adaptiveroutealgorithm === true) {
    adaptiveRouteAlgorithm[col].classList.remove('hideCompareFeature');
  }
  if (obj.selectiveroomcleaning === true) {
    selectiveRoomCleaning[col].classList.remove('hideCompareFeature');
  }
  if (obj.ldslasernavigation === true) {
    ldsLaserNavigation[col].classList.remove('hideCompareFeature');
  }
  if (obj.highprecisionmap === true) {
    highPrecisionMap[col].classList.remove('hideCompareFeature');
  }
  if (obj.mapsaving === true) {
    mapSaving[col].classList.remove('hideCompareFeature');
  }
  if (obj.multiplemapssaving === true) {
    multipleMapSaving[col].classList.remove('hideCompareFeature');
  }
  if (obj.zonecleanup === true) {
    zoneCleanup[col].classList.remove('hideCompareFeature');
  }
  if (obj.realtimerobotlocation === true) {
    realTimeRobotLocation[col].classList.remove('hideCompareFeature');
  }
  if (obj.appcontrol === true) {
    appControl[col].classList.remove('hideCompareFeature');
  }
  if (obj.voicecontrol === true) {
    voiceControl[col].classList.remove('hideCompareFeature');
  }
  // colors
  if (obj.color.includes("white")) {
    color[col][0].classList.remove('hideCompareFeature');
  }
  if (obj.color.includes("pink")) {
    color[col][1].classList.remove('hideCompareFeature');
  }
  if (obj.color.includes("black")) {
    color[col][2].classList.remove('hideCompareFeature');
  }
  // end of color
  if (obj.dualelectroniccompasses === true) {
    dualElectronicCompasses[col].classList.remove('hideCompareFeature');
  }
  if (obj.inertialnavigation === true) {
    inertialNavigation[col].classList.remove('hideCompareFeature');
  }
  if (obj.obstaclerecognition === true) {
    obstacleRecognition[col].classList.remove('hideCompareFeature');
  }
  if (obj.moppingfunction === true) {
    moppingFunction[col].classList.remove('hideCompareFeature');
  }
  if (obj.carpetboostmode === true) {
    carpetBoostMode[col].classList.remove('hideCompareFeature');
  }
  if (obj.customizedwaterandsuctionofroom === true) {
    customizedWaterAndSuctionOfRoom[col].classList.remove('hideCompareFeature');
  }
  if (obj.autorecharge === true) {
    autoRecharg[col].classList.remove('hideCompareFeature');
  }
  if (obj.topupcharging === true) {
    topupCharging[col].classList.remove('hideCompareFeature');
  }
  if (obj.overtheairupgrades === true) {
    overTheAirUpgrades[col].classList.remove('hideCompareFeature');
  }
  if (obj.donotdisturb === true) {
    doNotDisturb[col].classList.remove('hideCompareFeature');
  }
  if (obj.donotdisturb === true) {
    wifiConnectivity[col].classList.remove('hideCompareFeature');
  }
  if (obj.voicepack === true) {
    voicePack[col].classList.remove('hideCompareFeature');
  }
  if (obj.washabledustbin === true) {
    washableDustbin[col].classList.remove('hideCompareFeature');
  }
  if (obj.washablee11airfilter === true) {
    washableE11AirFilter[col].classList.remove('hideCompareFeature');
  }
}


// * fill properties with values *
function populateFeatures(col, obj) {
  cliffSensor[col].textContent = obj.cliffsensor;
  volumeBalanceMode[col].textContent = obj.volumebalancemode;
  volumeQuietMode[col].textContent = obj.volumequietmode;
  batteryCapacity[col].textContent = obj.batterycapacity;
  suitableArea[col].textContent = obj.suitablearea;
  ratedPower[col].textContent = obj.ratedpower;
  dustbinVolume[col].textContent = obj.dustbinvolume;
  waterTankCapacity[col].textContent = obj.watertankcapacity;
  suction[col].textContent = obj.suction;
  runtime[col].textContent = obj.runtime;
}


// * don't let to compare two the same vacuum models *
function noDuplicatedVacuums(colSelect, colReplace_A, colReplace_B) {

  const selectedVaccumName_1 = document.querySelector('.comp__menu--1 .comp__menu__top-btn').textContent;
  const selectedVaccumName_2 = document.querySelector('.comp__menu--2 .comp__menu__top-btn').textContent;
  const selectedVaccumName_3 = document.querySelector('.comp__menu--3 .comp__menu__top-btn').textContent;
  const selectecVacuumNames = [selectedVaccumName_1, selectedVaccumName_2, selectedVaccumName_3];

  const menuList_1_Buttons = document.querySelectorAll('.comp__menu__list--1 button');
  const menuList_2_Buttons = document.querySelectorAll('.comp__menu__list--2 button');
  const menuList_3_Buttons = document.querySelectorAll('.comp__menu__list--3 button');
  const menuListButtons = [menuList_1_Buttons, menuList_2_Buttons, menuList_3_Buttons];


  //// chceck first pair of columns
  if (selectecVacuumNames[colSelect] === selectecVacuumNames[colReplace_A]) {
    const menuListVacuumNames = [];
    menuListButtons[colReplace_A].forEach(el => menuListVacuumNames.push(el.textContent));
    
    // find index of the next vacuum on the list
    const selectecVacuumIndex = menuListVacuumNames.indexOf(selectecVacuumNames[colSelect]); 
    let replaceVacuumIndex;
    if ((selectecVacuumIndex !== (menuListVacuumNames.length - 1)) && (menuListVacuumNames.length > 2)) {
      replaceVacuumIndex = selectecVacuumIndex + 1;
    } else if (selectecVacuumIndex === (menuListVacuumNames.length - 1)) {
      replaceVacuumIndex = 0;
    }

    // show replacing vacuum image, name, link, existing features and values
    showReplacingVacuum(colReplace_A, replaceVacuumIndex);

    // in menu top button show replacing vacuum name and approval mark next to it
    showReplacingVaccumInTopMenuButton(colReplace_A, replaceVacuumIndex, selectecVacuumIndex);


    // after replacement, if now colReplace_A is equal to colReplace_B, change vacuum in colReplace_B
    const colReplace_B_VacuumIndex = menuListVacuumNames.indexOf(selectecVacuumNames[colReplace_B]);
    if (colReplace_B_VacuumIndex === replaceVacuumIndex) {
      let nestedReplaceVacuumIndex;
      if (replaceVacuumIndex !== (menuListVacuumNames.length - 1)) {
        nestedReplaceVacuumIndex = replaceVacuumIndex + 1;
      } else {
        nestedReplaceVacuumIndex = 0;
      }

      // show replacing vacuum image, name, link, existing features and values
      showReplacingVacuum(colReplace_B, nestedReplaceVacuumIndex);

      // in menu top button show replacing vacuum name and approval mark next to it
      showReplacingVaccumInTopMenuButton(colReplace_B, nestedReplaceVacuumIndex, replaceVacuumIndex);
    }
  }


  //// check second pair of columns
  if (selectecVacuumNames[colSelect] === selectecVacuumNames[colReplace_B]) {
    const menuListVacuumNames = [];
    menuListButtons[colReplace_B].forEach(el => menuListVacuumNames.push(el.textContent));
    
    // find index of the next vacuum on the list
    const selectecVacuumIndex = menuListVacuumNames.indexOf(selectecVacuumNames[colSelect]); 
    let replaceVacuumIndex;
    if ((selectecVacuumIndex !== (menuListVacuumNames.length - 1)) && (menuListVacuumNames.length > 2)) {
      replaceVacuumIndex = selectecVacuumIndex + 1;
    } else if (selectecVacuumIndex === (menuListVacuumNames.length - 1)) {
      replaceVacuumIndex = 0;
    }

    // show replacing vacuum image, name, link, existing features and values
    showReplacingVacuum(colReplace_B, replaceVacuumIndex);

    // in menu top button show replacing vacuum name and approval mark next to it
    showReplacingVaccumInTopMenuButton(colReplace_B, replaceVacuumIndex, selectecVacuumIndex);


    // after replacement, if now colReplace_B is equal to colReplace_A, change vacuum in colReplace_A
    const colReplace_A_VacuumIndex = menuListVacuumNames.indexOf(selectecVacuumNames[colReplace_A]);
    if (colReplace_A_VacuumIndex === replaceVacuumIndex) {
      let nestedReplaceVacuumIndex;
      if (replaceVacuumIndex !== (menuListVacuumNames.length - 1)) {
        nestedReplaceVacuumIndex = replaceVacuumIndex + 1;
      } else {
        nestedReplaceVacuumIndex = 0;
      }

      // show replacing vacuum image, name, link, existing features and values
      showReplacingVacuum(colReplace_A, nestedReplaceVacuumIndex);

      // in menu top button show replacing vacuum name and approval mark next to it
      showReplacingVaccumInTopMenuButton(colReplace_A, nestedReplaceVacuumIndex, replaceVacuumIndex);
    }
  }


  function showReplacingVacuum(col, index) {
    featuresColumn[col].forEach(el => el.classList.add('hideCompareFeature'));
    color[col].forEach(el => el.classList.add('hideCompareFeature'));
    showSelectedVacuum(col, devices[index]);
    ifFeaturesExist(col, devices[index]);
    populateFeatures(col, devices[index]);
  }

  function showReplacingVaccumInTopMenuButton(col, newIndex, prevIndex) {
    menuTopButtons[col].firstChild.textContent = devices[newIndex].name;
    menuTopButtons[col].nextElementSibling.children[prevIndex].firstElementChild.lastElementChild.classList.add('displayNone');
    menuTopButtons[col].nextElementSibling.children[newIndex].firstElementChild.lastElementChild.classList.remove('displayNone');
  }
}



/// MENU TOP BUTTONS
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



/// SHOW/HIDE QUESTION MARK TOOLTIP
featureTitles.forEach(el => {
  el.addEventListener('click', function() {
    if (this.lastElementChild.firstElementChild) {
      this.lastElementChild.firstElementChild.classList.toggle('displayNone');
    }
  })
})

featureTitles.forEach(el => {
  el.addEventListener('mouseleave', function() {
    if (this.lastElementChild.firstElementChild) {
      this.lastElementChild.firstElementChild.classList.add('displayNone');
    }
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