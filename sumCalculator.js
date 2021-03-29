let arrayNumber = [1,2,3,4,5,6];

var sumArray = arrayNumber.reduce(function(sum, number){
    return sum + number;
},0)
console.log(sumArray);
