const findTheOldest = function(people) {

    const oldest =  people.reduce((currentPerson,nextPerson) => { 
    const currentPersonAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
    const nextPersonAge = getAge(nextPerson.yearOfBirth, nextPerson.yearOfDeath);
    
      return nextPersonAge > currentPersonAge ? nextPerson : currentPerson;
  });
  return oldest.name;
};




 function getAge(yearOfBirth,yearOfDeath) {
    if(!yearOfDeath) {
        yearOfDeath = new Date().getFullYear();
    }
    return yearOfDeath - yearOfBirth;
 }
// Do not edit below this line
module.exports = findTheOldest;
