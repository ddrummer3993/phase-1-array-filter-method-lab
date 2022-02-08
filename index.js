// test data

const names = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

// create function findMatching

function findMatching(array, string) {
    let matchingName = array.filter(element => {
        if (element.toLowerCase() === string.toLowerCase()) {
            return element;
        }
    });
    return matchingName;
}

console.log(findMatching(names, 'Sally'));

// creat function fuzzyMatch

function fuzzyMatch(array, string) {
    let fuzzyName = array.filter(element => {
        if (element.slice(0, 2) === string) {
            return element;
        };
    });
    return fuzzyName;
};

console.log(fuzzyMatch(names, 'Sa'));


// creat function matchName

function matchName(array, string) {
    let matchObj = array.filter(element => {
        if (element.name === string) {
            return element;
        };
    });
    return matchObj;
};

console.log(matchName(drivers, 'Sally'))