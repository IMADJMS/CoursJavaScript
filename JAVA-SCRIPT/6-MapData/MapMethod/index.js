// hadi ghadi takhdem biha blast object

/*
  - Map Data Type
  Methods
  --- set
  --- get
  --- delete
  --- clear
  --- has

  Properties
  --- size
*/


// myMap.set(10, "Number");
// myMap.set("Name", "String");
// console.log(myMap.get(10));
// console.log(myMap.get("Name"));
// console.log(myMap.get(false));



let myData = new Map([
    ["imad", "jamousii"],
    [10, "Number"],
    [false, "Boolean"],
    [true, "Boolean2"]
]);


console.log(myData.delete("imad"));
// myData.clear();
console.log(myData);
console.log(myData.size);
console.log(myData.has(false));
