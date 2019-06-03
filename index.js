// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    return firstTwoDrivers(drivers);
}
  
const firstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}
  
function returnLastTwoDrivers(drivers) {
    return lastTwoDrivers(drivers);
}
  
const lastTwoDrivers = function(drivers) {
    return drivers.slice(drivers.length - 2, drivers.length)
}
  
const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
];

const createFareMultiplier = function(multi) {
    return function(num) {
        return num * multi;
    }
}

const fareDoubler = function(num) {
    return num * 2;
}

const fareTripler = function(num) {
    return num * 3;
}

function selectDifferentDrivers(array, func) {
    return func(array);
}