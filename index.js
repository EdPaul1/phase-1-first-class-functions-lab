// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(){
    let driver1 = [...drivers];
    return (driver1.slice(0,2));

}
returnFirstTwoDrivers(drivers);
const returnLastTwoDrivers = function(){
    let driver2 = [...drivers];
    return (driver2.slice(2,4));
}
returnLastTwoDrivers(drivers);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// function createFareMultiplier(fare){
//     function fares(){
//         fare * fare;
//     }
// }
// createFareMultiplier()
function createFareMultiplier(multiplier) {
    return function (fare) {
      return fare * multiplier;
    }
  }
  
  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);

//   const selectDifferentDrivers = function(drivers, ){
//     return 
//   }