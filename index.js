// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
  return [drivers[0],drivers[1]]
};

function returnLastTwoDrivers(drivers){
  return drivers.slice(-2)
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x) {
  return function (a){
      return a*x
  };
};

function fareDoubler(x){
    return createFareMultiplier(2)(x)
};

function fareTripler(x) {
  return createFareMultiplier(3)(x)
};

function fareTripler(x) {
  return createFareMultiplier(3)(x)
};

function selectDifferentDrivers(arrayOfDrivers, thing){
  return thing(arrayOfDrivers);
};
