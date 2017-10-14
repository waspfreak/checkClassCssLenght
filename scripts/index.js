let el = document.getElementById("title");
let ele = el.className;
console.log("list css: ", ele);

function validateClassName(...items) {
    if (items.length < 2 ) {
      return (el.className += " neutral");
    }
    return items;
}
validateClassName(ele);

let nova = document.getElementById("title");
console.log(nova);



// var res = ele.split(" ");
// console.log("array: ", res);

// for (var i = 0; i < ele.length; i++) {
//     var elem = ele;
// }
//console.log("for: ", elem);

//let uno = ("title", "class1", "class2");