const leapYears = function(year) {

    if (year % 4 == 0){
        if(year % 100 == 0){
            return false
        } else if (year % 400 == 0){
            return true
        } else return true
    } else false

};

// Do not edit below this line
module.exports = leapYears;
