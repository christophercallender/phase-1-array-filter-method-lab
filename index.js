// const sinon = require( 'sinon' )

// describe('index.js', function () {
//   describe('findMatching()', function () {
//     it('returns all drivers that match the passed in name', function () {
//       const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

//       expect(findMatching(drivers, 'Bobby')).to.eql(['Bobby', 'Bobby']);
//       expect(findMatching(drivers, 'Sammy')).to.eql(['Sammy']);
//     });

//     it('returns matching drivers if case does not match but letters do', function () {
//       const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

//       expect(findMatching(drivers, 'Bobby')).to.eql(['Bobby', 'bobby']);
//     });

//     it('returns an empty array if there is no match', function () {
//       const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

//       expect(findMatching(drivers, 'Susan')).to.eql([]);
//     });
//   });

// findMatching- This function takes an array of drivers' names and a string as arguments, 
// and returns the matching list of drivers. The function should be case insensitive.

function findMatching(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
}

//   describe('fuzzyMatch()', function () {
//     const drivers = [];

//     beforeEach(function () {
//       drivers.length = 0;

//       drivers.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby');
//     });

//     it('returns a driver if beginning provided letters match', function () {
//       expect(fuzzyMatch(drivers, 'Sa')).to.have.members(['Sammy', 'Sarah', 'Sally']);
//     });

//     it('does not return drivers if only middle or ending letters match', function () {
//       expect(fuzzyMatch(drivers, 'y')).to.have.members([]);
//     });

//     it('does not return drivers if only middle or ending letters match', function () {
//       expect(fuzzyMatch(drivers, 'mm')).to.have.members([]);
//     });
//   });

// fuzzyMatch - This function takes an array of drivers' names and a string as arguments 
// for querying the array, and returns all drivers whose names begin with the provided letters.

function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => driver.toLowerCase().substring(0, string.length) === string.toLowerCase())
}

//   describe('matchName()', function () {
//     it('accesses the data structure to check if name matches', function () {
//       const drivers = [
//         {
//           name: 'Bobby',
//           hometown: 'Pittsburgh' },
//         {
//           name: 'Sammy',
//           hometown: 'New York' } ,
//         {
//           name: 'Sally',
//           hometown: 'Cleveland' },
//         {
//           name: 'Annette',
//           hometown: 'Los Angeles' },
//         {
//           name: 'Bobby',
//           hometown: 'Tampa Bay' }
//       ];

//       expect(matchName(drivers, 'Bobby')).to.eql([
//         {
//           name: 'Bobby',
//           hometown: 'Pittsburgh'
//         },
//         {
//           name: 'Bobby',
//           hometown: 'Tampa Bay'
//         }
//       ]);
//     });
//   });

// matchName - This function takes an array of driver objects and a string as arguments. 
// Each driver object has two properties: name and hometown. The function should 
// return each element whose name property matches the provided string argument.

function matchName(drivers, string) {
    return drivers.filter(driver => driver.name === string)
}

// });