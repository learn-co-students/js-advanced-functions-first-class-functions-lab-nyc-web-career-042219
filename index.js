
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2, 5)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(number) {
    return function(fare) {
        return fare * number
    };
};

// const fareDoubler = function(fare) {
//     return fare * 2
// };
// come back and actually do this one right

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, func) {
    if (func === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
    } else {
        return returnLastTwoDrivers(drivers);
    }
}