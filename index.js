const returnFirstTwoDrivers = function(arr){
    let newarr = arr.slice(0,2);
    return newarr;
};

const returnLastTwoDrivers = function(arr){
    let newarr = arr.slice(-2);
    return newarr
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(mult){
    return function(num){
        return num*mult;
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(arr, fn){
    return fn(arr);
};