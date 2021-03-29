function valueChecker (arg1, arg2){
    if (arg1 === arg2){
        return true;
    }
    else {
        return false;
    }
}

console.log(valueChecker(3,3)); //true
console.log(valueChecker(1,2)); //false