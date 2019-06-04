// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
};

const returnLastTwoDrivers = function(drivers){
    let length = drivers.length
    return drivers.slice(length-2,length)
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiple){

    return function(fare){
        return fare*multiple;
    };

};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, func){
    return func(drivers);
};
