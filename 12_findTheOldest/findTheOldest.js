const findTheOldest = function(arr) {


    let mapped = arr.map((people) => ({

        
        name: people.name,
        age: people.yearOfDeath - people.yearOfBirth
    }));

    mapped.sort((a, b) => b.age - a.age);

    return mapped[0];

};

// Do not edit below this line
module.exports = findTheOldest;
