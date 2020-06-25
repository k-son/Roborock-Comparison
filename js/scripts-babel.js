(function () {
  "use strict"; //// VARIABLES

  var menus = document.querySelectorAll('.comp__menu');
  var menuLists = document.querySelectorAll('.comp__menu__list');
  var menuTopButtons = document.querySelectorAll('.comp__menu__top-btn');
  var menuList_1 = document.querySelector('.comp__menu__list--1');
  var menuList_2 = document.querySelector('.comp__menu__list--2');
  var menuList_3 = document.querySelector('.comp__menu__list--3');
  var featureTitles = document.querySelectorAll('.comp__feature-title');
  var questionMarks = document.querySelectorAll('.comp__feature-title__question-mark');
  var devices; // vacuum objects from json file

  var selectecVacuumName; // name of just selected vacuum

  var selectedVacuumObject; // to store just selected (from menu list) vacuum object

  var featuresColumn_1 = document.querySelectorAll('.comp__feature-exists--1');
  var featuresColumn_2 = document.querySelectorAll('.comp__feature-exists--2');
  var featuresColumn_3 = document.querySelectorAll('.comp__feature-exists--3');
  var featuresColumn = [featuresColumn_1, featuresColumn_2, featuresColumn_3]; // features' fields

  var image_1 = document.getElementById('comp__vacuums__image--1');
  var image_2 = document.getElementById('comp__vacuums__image--2');
  var image_3 = document.getElementById('comp__vacuums__image--3');
  var image = [image_1, image_2, image_3];
  var vacName_1 = document.getElementById('comp__vacuums__h2--1');
  var vacName_2 = document.getElementById('comp__vacuums__h2--2');
  var vacName_3 = document.getElementById('comp__vacuums__h2--3');
  var vacName = [vacName_1, vacName_2, vacName_3];
  var linkURL_1 = document.getElementById('comp__vacuums__more-btn--1');
  var linkURL_2 = document.getElementById('comp__vacuums__more-btn--2');
  var linkURL_3 = document.getElementById('comp__vacuums__more-btn--3');
  var linkURL = [linkURL_1, linkURL_2, linkURL_3];
  var adaptiveRouteAlgorithm_1 = document.getElementById('adaptiveRouteAlgorithm--1');
  var adaptiveRouteAlgorithm_2 = document.getElementById('adaptiveRouteAlgorithm--2');
  var adaptiveRouteAlgorithm_3 = document.getElementById('adaptiveRouteAlgorithm--3');
  var adaptiveRouteAlgorithm = [adaptiveRouteAlgorithm_1, adaptiveRouteAlgorithm_2, adaptiveRouteAlgorithm_3];
  var selectiveRoomCleaning_1 = document.getElementById('selectiveRoomCleaning--1');
  var selectiveRoomCleaning_2 = document.getElementById('selectiveRoomCleaning--2');
  var selectiveRoomCleaning_3 = document.getElementById('selectiveRoomCleaning--3');
  var selectiveRoomCleaning = [selectiveRoomCleaning_1, selectiveRoomCleaning_2, selectiveRoomCleaning_3];
  var ldsLaserNavigation_1 = document.getElementById('ldsLaserNavigation--1');
  var ldsLaserNavigation_2 = document.getElementById('ldsLaserNavigation--2');
  var ldsLaserNavigation_3 = document.getElementById('ldsLaserNavigation--3');
  var ldsLaserNavigation = [ldsLaserNavigation_1, ldsLaserNavigation_2, ldsLaserNavigation_3];
  var highPrecisionMap_1 = document.getElementById('highPrecisionMap--1');
  var highPrecisionMap_2 = document.getElementById('highPrecisionMap--2');
  var highPrecisionMap_3 = document.getElementById('highPrecisionMap--3');
  var highPrecisionMap = [highPrecisionMap_1, highPrecisionMap_2, highPrecisionMap_3];
  var mapSaving_1 = document.getElementById('mapSaving--1');
  var mapSaving_2 = document.getElementById('mapSaving--2');
  var mapSaving_3 = document.getElementById('mapSaving--3');
  var mapSaving = [mapSaving_1, mapSaving_2, mapSaving_3];
  var multipleMapSaving_1 = document.getElementById('multipleMapSaving--1');
  var multipleMapSaving_2 = document.getElementById('multipleMapSaving--2');
  var multipleMapSaving_3 = document.getElementById('multipleMapSaving--3');
  var multipleMapSaving = [multipleMapSaving_1, multipleMapSaving_2, multipleMapSaving_3];
  var zoneCleanup_1 = document.getElementById('zoneCleanup--1');
  var zoneCleanup_2 = document.getElementById('zoneCleanup--2');
  var zoneCleanup_3 = document.getElementById('zoneCleanup--3');
  var zoneCleanup = [zoneCleanup_1, zoneCleanup_2, zoneCleanup_3];
  var realTimeRobotLocation_1 = document.getElementById('realTimeRobotLocation--1');
  var realTimeRobotLocation_2 = document.getElementById('realTimeRobotLocation--2');
  var realTimeRobotLocation_3 = document.getElementById('realTimeRobotLocation--3');
  var realTimeRobotLocation = [realTimeRobotLocation_1, realTimeRobotLocation_2, realTimeRobotLocation_3];
  var appControl_1 = document.getElementById('appControl--1');
  var appControl_2 = document.getElementById('appControl--2');
  var appControl_3 = document.getElementById('appControl--3');
  var appControl = [appControl_1, appControl_2, appControl_3];
  var voiceControl_1 = document.getElementById('voiceControl--1');
  var voiceControl_2 = document.getElementById('voiceControl--2');
  var voiceControl_3 = document.getElementById('voiceControl--3');
  var voiceControl = [voiceControl_1, voiceControl_2, voiceControl_3];
  var color_1_white = document.getElementById('color--1--white');
  var color_1_pink = document.getElementById('color--1--pink');
  var color_1_black = document.getElementById('color--1--black');
  var color_2_white = document.getElementById('color--2--white');
  var color_2_pink = document.getElementById('color--2--pink');
  var color_2_black = document.getElementById('color--2--black');
  var color_3_white = document.getElementById('color--3--white');
  var color_3_pink = document.getElementById('color--3--pink');
  var color_3_black = document.getElementById('color--3--black');
  var color_1 = [color_1_white, color_1_pink, color_1_black];
  var color_2 = [color_2_white, color_2_pink, color_2_black];
  var color_3 = [color_3_white, color_3_pink, color_3_black];
  var color = [color_1, color_2, color_3];
  var dualElectronicCompasses_1 = document.getElementById('dualElectronicCompasses--1');
  var dualElectronicCompasses_2 = document.getElementById('dualElectronicCompasses--2');
  var dualElectronicCompasses_3 = document.getElementById('dualElectronicCompasses--3');
  var dualElectronicCompasses = [dualElectronicCompasses_1, dualElectronicCompasses_2, dualElectronicCompasses_3];
  var inertialNavigation_1 = document.getElementById('inertialNavigation--1');
  var inertialNavigation_2 = document.getElementById('inertialNavigation--2');
  var inertialNavigation_3 = document.getElementById('inertialNavigation--3');
  var inertialNavigation = [inertialNavigation_1, inertialNavigation_2, inertialNavigation_3];
  var cliffSensor_1 = document.getElementById('cliffSensor--1');
  var cliffSensor_2 = document.getElementById('cliffSensor--2');
  var cliffSensor_3 = document.getElementById('cliffSensor--3');
  var cliffSensor = [cliffSensor_1, cliffSensor_2, cliffSensor_3];
  var obstacleRecognition_1 = document.getElementById('obstacleRecognition--1');
  var obstacleRecognition_2 = document.getElementById('obstacleRecognition--2');
  var obstacleRecognition_3 = document.getElementById('obstacleRecognition--3');
  var obstacleRecognition = [obstacleRecognition_1, obstacleRecognition_2, obstacleRecognition_3];
  var moppingFunction_1 = document.getElementById('moppingFunction--1');
  var moppingFunction_2 = document.getElementById('moppingFunction--2');
  var moppingFunction_3 = document.getElementById('moppingFunction--3');
  var moppingFunction = [moppingFunction_1, moppingFunction_2, moppingFunction_3];
  var carpetBoostMode_1 = document.getElementById('carpetBoostMode--1');
  var carpetBoostMode_2 = document.getElementById('carpetBoostMode--2');
  var carpetBoostMode_3 = document.getElementById('carpetBoostMode--3');
  var carpetBoostMode = [carpetBoostMode_1, carpetBoostMode_2, carpetBoostMode_3];
  var customizedWaterAndSuctionOfRoom_1 = document.getElementById('customizedWaterAndSuctionOfRoom--1');
  var customizedWaterAndSuctionOfRoom_2 = document.getElementById('customizedWaterAndSuctionOfRoom--2');
  var customizedWaterAndSuctionOfRoom_3 = document.getElementById('customizedWaterAndSuctionOfRoom--3');
  var customizedWaterAndSuctionOfRoom = [customizedWaterAndSuctionOfRoom_1, customizedWaterAndSuctionOfRoom_2, customizedWaterAndSuctionOfRoom_3];
  var autoRecharg_1 = document.getElementById('autoRecharg--1');
  var autoRecharg_2 = document.getElementById('autoRecharg--2');
  var autoRecharg_3 = document.getElementById('autoRecharg--3');
  var autoRecharg = [autoRecharg_1, autoRecharg_2, autoRecharg_3];
  var topupCharging_1 = document.getElementById('topupCharging--1');
  var topupCharging_2 = document.getElementById('topupCharging--2');
  var topupCharging_3 = document.getElementById('topupCharging--3');
  var topupCharging = [topupCharging_1, topupCharging_2, topupCharging_3];
  var overTheAirUpgrades_1 = document.getElementById('overTheAirUpgrades--1');
  var overTheAirUpgrades_2 = document.getElementById('overTheAirUpgrades--2');
  var overTheAirUpgrades_3 = document.getElementById('overTheAirUpgrades--3');
  var overTheAirUpgrades = [overTheAirUpgrades_1, overTheAirUpgrades_2, overTheAirUpgrades_3];
  var doNotDisturb_1 = document.getElementById('doNotDisturb--1');
  var doNotDisturb_2 = document.getElementById('doNotDisturb--2');
  var doNotDisturb_3 = document.getElementById('doNotDisturb--3');
  var doNotDisturb = [doNotDisturb_1, doNotDisturb_2, doNotDisturb_3];
  var wifiConnectivity_1 = document.getElementById('wifiConnectivity--1');
  var wifiConnectivity_2 = document.getElementById('wifiConnectivity--2');
  var wifiConnectivity_3 = document.getElementById('wifiConnectivity--3');
  var wifiConnectivity = [wifiConnectivity_1, wifiConnectivity_2, wifiConnectivity_3];
  var voicePack_1 = document.getElementById('voicePack--1');
  var voicePack_2 = document.getElementById('voicePack--2');
  var voicePack_3 = document.getElementById('voicePack--3');
  var voicePack = [voicePack_1, voicePack_2, voicePack_3];
  var washableDustbin_1 = document.getElementById('washableDustbin--1');
  var washableDustbin_2 = document.getElementById('washableDustbin--2');
  var washableDustbin_3 = document.getElementById('washableDustbin--3');
  var washableDustbin = [washableDustbin_1, washableDustbin_2, washableDustbin_3];
  var washableE11AirFilter_1 = document.getElementById('washableE11AirFilter--1');
  var washableE11AirFilter_2 = document.getElementById('washableE11AirFilter--2');
  var washableE11AirFilter_3 = document.getElementById('washableE11AirFilter--3');
  var washableE11AirFilter = [washableE11AirFilter_1, washableE11AirFilter_2, washableE11AirFilter_3];
  var volumeBalanceMode_1 = document.getElementById('volumeBalanceMode--1');
  var volumeBalanceMode_2 = document.getElementById('volumeBalanceMode--2');
  var volumeBalanceMode_3 = document.getElementById('volumeBalanceMode--3');
  var volumeBalanceMode = [volumeBalanceMode_1, volumeBalanceMode_2, volumeBalanceMode_3];
  var volumeQuietMode_1 = document.getElementById('volumeQuietMode--1');
  var volumeQuietMode_2 = document.getElementById('volumeQuietMode--2');
  var volumeQuietMode_3 = document.getElementById('volumeQuietMode--3');
  var volumeQuietMode = [volumeQuietMode_1, volumeQuietMode_2, volumeQuietMode_3];
  var batteryCapacity_1 = document.getElementById('batteryCapacity--1');
  var batteryCapacity_2 = document.getElementById('batteryCapacity--2');
  var batteryCapacity_3 = document.getElementById('batteryCapacity--3');
  var batteryCapacity = [batteryCapacity_1, batteryCapacity_2, batteryCapacity_3];
  var suitableArea_1 = document.getElementById('suitableArea--1');
  var suitableArea_2 = document.getElementById('suitableArea--2');
  var suitableArea_3 = document.getElementById('suitableArea--3');
  var suitableArea = [suitableArea_1, suitableArea_2, suitableArea_3];
  var ratedPower_1 = document.getElementById('ratedPower--1');
  var ratedPower_2 = document.getElementById('ratedPower--2');
  var ratedPower_3 = document.getElementById('ratedPower--3');
  var ratedPower = [ratedPower_1, ratedPower_2, ratedPower_3];
  var dustbinVolume_1 = document.getElementById('dustbinVolume--1');
  var dustbinVolume_2 = document.getElementById('dustbinVolume--2');
  var dustbinVolume_3 = document.getElementById('dustbinVolume--3');
  var dustbinVolume = [dustbinVolume_1, dustbinVolume_2, dustbinVolume_3];
  var waterTankCapacity_1 = document.getElementById('waterTankCapacity--1');
  var waterTankCapacity_2 = document.getElementById('waterTankCapacity--2');
  var waterTankCapacity_3 = document.getElementById('waterTankCapacity--3');
  var waterTankCapacity = [waterTankCapacity_1, waterTankCapacity_2, waterTankCapacity_3];
  var suction_1 = document.getElementById('suction--1');
  var suction_2 = document.getElementById('suction--2');
  var suction_3 = document.getElementById('suction--3');
  var suction = [suction_1, suction_2, suction_3];
  var runtime_1 = document.getElementById('runtime--1');
  var runtime_2 = document.getElementById('runtime--2');
  var runtime_3 = document.getElementById('runtime--3');
  var runtime = [runtime_1, runtime_2, runtime_3]; //// MAIN SCRIPTS
  /// RETRIVE JSON

  var requestURL = 'https://roborock-compare.k-son.eu/roborock_compare.json';
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send(); /// ONLOAD ACTIONS

  request.onload = function () {
    var roborockCompareObject = request.response;
    buildMenus(roborockCompareObject); // in menu top button show vacuum name and, next to it, approval mark

    for (var i = 0; i < menuTopButtons.length; i++) {
      menuTopButtons[i].firstChild.textContent = devices[i].name;
      menuTopButtons[i].nextElementSibling.children[i].firstElementChild.lastElementChild.classList.remove('displayNone');
    } // show vacuum features


    for (var _i = 0; _i <= 2; _i++) {
      showSelectedVacuum(_i, devices[_i]);
      ifFeaturesExist(_i, devices[_i]);
      populateFeatures(_i, devices[_i]);
    }
  }; /// BUILD DROPDOWN MENUS


  function buildMenus(obj) {
    devices = obj.devices; // devices array containing all vacuums objects, retrived from roborock_compare.json
    // build menus

    for (var i = 0; i < menuLists.length; i++) {
      for (var j = 0; j < devices.length; j++) {
        var listItem = document.createElement('li');
        listItem.classList.add('comp__menu__list-item');
        var button = document.createElement('button');
        button.classList.add('comp__menu__btn');
        button.textContent = devices[j].name;
        var span = document.createElement('span');
        span.classList.add('comp__selected-vacuum');
        span.classList.add('displayNone');
        button.appendChild(span);
        listItem.appendChild(button);
        menuLists[i].appendChild(listItem);
      }
    } // retrive menus' buttons and attach event listeners to them


    var menu_1_ListButtons = document.querySelectorAll('.comp__menu--1 .comp__menu__btn');
    var menu_2_ListButtons = document.querySelectorAll('.comp__menu--2 .comp__menu__btn');
    var menu_3_ListButtons = document.querySelectorAll('.comp__menu--3 .comp__menu__btn');
    menu_1_ListButtons.forEach(function (el) {
      el.addEventListener('click', selectVacuum);
      el.addEventListener('click', handleFeatures_1);
    });
    menu_2_ListButtons.forEach(function (el) {
      el.addEventListener('click', selectVacuum);
      el.addEventListener('click', handleFeatures_2);
    });
    menu_3_ListButtons.forEach(function (el) {
      el.addEventListener('click', selectVacuum);
      el.addEventListener('click', handleFeatures_3);
    });
  } /// MENU LISTS' BUTTONS 
  // select vacuum and add approval mark


  function selectVacuum() {
    // remove any approval mark
    var listItems = this.parentElement.parentElement.children;
    Array.from(listItems).forEach(function (elem) {
      return elem.firstElementChild.firstElementChild.classList.add('displayNone');
    }); // add approval mark to selected item

    this.firstElementChild.classList.remove('displayNone'); // hide menu list

    this.parentElement.parentElement.classList.add('displayNone'); // in menu top button window show name of the selected vacuum 

    selectecVacuumName = this.textContent;
    this.parentElement.parentElement.previousElementSibling.firstChild.textContent = selectecVacuumName; // find selected object

    selectedVacuumObject = devices.filter(function (el) {
      return el.name === selectecVacuumName;
    });
  }

  function handleFeatures_1() {
    featuresColumn_1.forEach(function (el) {
      return el.classList.add('hideCompareFeature');
    });
    color_1.forEach(function (el) {
      return el.classList.add('hideCompareFeature');
    });
    showSelectedVacuum(0, selectedVacuumObject[0]);
    ifFeaturesExist(0, selectedVacuumObject[0]);
    populateFeatures(0, selectedVacuumObject[0]);
    noDuplicatedVacuums(0, 1, 2);
  }

  function handleFeatures_2() {
    featuresColumn_2.forEach(function (el) {
      return el.classList.add('hideCompareFeature');
    });
    color_2.forEach(function (el) {
      return el.classList.add('hideCompareFeature');
    });
    showSelectedVacuum(1, selectedVacuumObject[0]);
    ifFeaturesExist(1, selectedVacuumObject[0]);
    populateFeatures(1, selectedVacuumObject[0]);
    noDuplicatedVacuums(1, 0, 2);
  }

  function handleFeatures_3() {
    featuresColumn_3.forEach(function (el) {
      return el.classList.add('hideCompareFeature');
    });
    color_3.forEach(function (el) {
      return el.classList.add('hideCompareFeature');
    });
    showSelectedVacuum(2, selectedVacuumObject[0]);
    ifFeaturesExist(2, selectedVacuumObject[0]);
    populateFeatures(2, selectedVacuumObject[0]);
    noDuplicatedVacuums(2, 0, 1);
  } // show items image, name and add link to button


  function showSelectedVacuum(col, obj) {
    image[col].src = obj.image;
    vacName[col].textContent = obj.name;
    linkURL[col].href = obj.webpage;
  } /// METHODS
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
    } // colors


    if (obj.color.includes("white")) {
      color[col][0].classList.remove('hideCompareFeature');
    }

    if (obj.color.includes("pink")) {
      color[col][1].classList.remove('hideCompareFeature');
    }

    if (obj.color.includes("black")) {
      color[col][2].classList.remove('hideCompareFeature');
    } // end of color


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
  } // * fill properties with values *


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
  } // * don't let to compare two the same vacuum models *


  function noDuplicatedVacuums(colSelect, colReplace_A, colReplace_B) {
    var selectedVaccumName_1 = document.querySelector('.comp__menu--1 .comp__menu__top-btn').textContent;
    var selectedVaccumName_2 = document.querySelector('.comp__menu--2 .comp__menu__top-btn').textContent;
    var selectedVaccumName_3 = document.querySelector('.comp__menu--3 .comp__menu__top-btn').textContent;
    var selectecVacuumNames = [selectedVaccumName_1, selectedVaccumName_2, selectedVaccumName_3];
    var menuList_1_Buttons = document.querySelectorAll('.comp__menu__list--1 button');
    var menuList_2_Buttons = document.querySelectorAll('.comp__menu__list--2 button');
    var menuList_3_Buttons = document.querySelectorAll('.comp__menu__list--3 button');
    var menuListButtons = [menuList_1_Buttons, menuList_2_Buttons, menuList_3_Buttons]; //// chceck first pair of columns

    if (selectecVacuumNames[colSelect] === selectecVacuumNames[colReplace_A]) {
      var menuListVacuumNames = [];
      menuListButtons[colReplace_A].forEach(function (el) {
        return menuListVacuumNames.push(el.textContent);
      }); // find index of the next vacuum on the list

      var selectecVacuumIndex = menuListVacuumNames.indexOf(selectecVacuumNames[colSelect]);
      var replaceVacuumIndex;

      if (selectecVacuumIndex !== menuListVacuumNames.length - 1 && menuListVacuumNames.length > 2) {
        replaceVacuumIndex = selectecVacuumIndex + 1;
      } else if (selectecVacuumIndex === menuListVacuumNames.length - 1) {
        replaceVacuumIndex = 0;
      } // show replacing vacuum image, name, link, existing features and values


      showReplacingVacuum(colReplace_A, replaceVacuumIndex); // in menu top button show replacing vacuum name and approval mark next to it

      showReplacingVaccumInTopMenuButton(colReplace_A, replaceVacuumIndex, selectecVacuumIndex); // after replacement, if now colReplace_A is equal to colReplace_B, change vacuum in colReplace_B

      var colReplace_B_VacuumIndex = menuListVacuumNames.indexOf(selectecVacuumNames[colReplace_B]);

      if (colReplace_B_VacuumIndex === replaceVacuumIndex) {
        var nestedReplaceVacuumIndex;

        if (replaceVacuumIndex !== menuListVacuumNames.length - 1) {
          nestedReplaceVacuumIndex = replaceVacuumIndex + 1;
        } else {
          nestedReplaceVacuumIndex = 0;
        } // show replacing vacuum image, name, link, existing features and values


        showReplacingVacuum(colReplace_B, nestedReplaceVacuumIndex); // in menu top button show replacing vacuum name and approval mark next to it

        showReplacingVaccumInTopMenuButton(colReplace_B, nestedReplaceVacuumIndex, replaceVacuumIndex);
      }
    } //// check second pair of columns


    if (selectecVacuumNames[colSelect] === selectecVacuumNames[colReplace_B]) {
      var _menuListVacuumNames = [];
      menuListButtons[colReplace_B].forEach(function (el) {
        return _menuListVacuumNames.push(el.textContent);
      }); // find index of the next vacuum on the list

      var _selectecVacuumIndex = _menuListVacuumNames.indexOf(selectecVacuumNames[colSelect]);

      var _replaceVacuumIndex;

      if (_selectecVacuumIndex !== _menuListVacuumNames.length - 1 && _menuListVacuumNames.length > 2) {
        _replaceVacuumIndex = _selectecVacuumIndex + 1;
      } else if (_selectecVacuumIndex === _menuListVacuumNames.length - 1) {
        _replaceVacuumIndex = 0;
      } // show replacing vacuum image, name, link, existing features and values


      showReplacingVacuum(colReplace_B, _replaceVacuumIndex); // in menu top button show replacing vacuum name and approval mark next to it

      showReplacingVaccumInTopMenuButton(colReplace_B, _replaceVacuumIndex, _selectecVacuumIndex); // after replacement, if now colReplace_B is equal to colReplace_A, change vacuum in colReplace_A

      var colReplace_A_VacuumIndex = _menuListVacuumNames.indexOf(selectecVacuumNames[colReplace_A]);

      if (colReplace_A_VacuumIndex === _replaceVacuumIndex) {
        var _nestedReplaceVacuumIndex;

        if (_replaceVacuumIndex !== _menuListVacuumNames.length - 1) {
          _nestedReplaceVacuumIndex = _replaceVacuumIndex + 1;
        } else {
          _nestedReplaceVacuumIndex = 0;
        } // show replacing vacuum image, name, link, existing features and values


        showReplacingVacuum(colReplace_A, _nestedReplaceVacuumIndex); // in menu top button show replacing vacuum name and approval mark next to it

        showReplacingVaccumInTopMenuButton(colReplace_A, _nestedReplaceVacuumIndex, _replaceVacuumIndex);
      }
    }

    function showReplacingVacuum(col, index) {
      featuresColumn[col].forEach(function (el) {
        return el.classList.add('hideCompareFeature');
      });
      color[col].forEach(function (el) {
        return el.classList.add('hideCompareFeature');
      });
      showSelectedVacuum(col, devices[index]);
      ifFeaturesExist(col, devices[index]);
      populateFeatures(col, devices[index]);
    }

    function showReplacingVaccumInTopMenuButton(col, newIndex, prevIndex) {
      menuTopButtons[col].firstChild.textContent = devices[newIndex].name;
      menuTopButtons[col].nextElementSibling.children[prevIndex].firstElementChild.lastElementChild.classList.add('displayNone');
      menuTopButtons[col].nextElementSibling.children[newIndex].firstElementChild.lastElementChild.classList.remove('displayNone');
    }
  } /// MENU TOP BUTTONS
  // toggle list visibility and rotate chevron


  menuTopButtons.forEach(function (el) {
    el.addEventListener('click', function () {
      this.nextElementSibling.classList.toggle('displayNone');
      this.lastElementChild.classList.toggle('rotateChevron');
    });
  });
  menus.forEach(function (el) {
    el.addEventListener('mouseleave', function () {
      this.lastElementChild.classList.add('displayNone');
      this.firstElementChild.lastElementChild.classList.remove('rotateChevron');
    });
  }); /// SHOW/HIDE QUESTION MARK TOOLTIP

  featureTitles.forEach(function (el) {
    el.addEventListener('click', function () {
      if (this.lastElementChild.firstElementChild) {
        this.lastElementChild.firstElementChild.classList.toggle('displayNone');
      }
    });
  });
  featureTitles.forEach(function (el) {
    el.addEventListener('mouseleave', function () {
      if (this.lastElementChild.firstElementChild) {
        this.lastElementChild.firstElementChild.classList.add('displayNone');
      }
    });
  });
  questionMarks.forEach(function (el) {
    el.addEventListener('mouseenter', function () {
      this.firstElementChild.classList.remove('displayNone');
    });
  });
  questionMarks.forEach(function (el) {
    el.addEventListener('mouseleave', function () {
      this.firstElementChild.classList.add('displayNone');
    });
  });
})();