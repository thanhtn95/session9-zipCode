function checkZipCode(str) {
   let regex = /^[0-9]{5}(?:-[0-9]{4})?$/;
    if (regex.test(str)) {
        return true;
    } else return false;
}

let test1 = "06956 - 2535";
let test2 = "555";
let test3 = "03201 - 2150";
console.log(checkZipCode(test1));
console.log(checkZipCode(test2));
console.log(checkZipCode(test3));