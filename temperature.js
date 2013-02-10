"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate() {
  var result;
  var original = document.getElementById("original");
  var temp = original.value;
  var regexp = /(-[0-9]+|[0-9]+)(\s*|\.)([0-9]*)(C|F|c|f)/;
  var m = temp.match(regexp);
  if (m) {
    var num = m[1]+m[2]+m[3];
    var type = m[4];
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
      result = (num * 9/5)+32;
      result = result + 'F';
    }
    else {
      result = (num - 32)*5/9;
      result = result + 'C';
    }
    converted.innerHTML = result;
  }
  else {
    converted.innerHTML = "ERROR! Try something like '-4.2C' instead";
  }
}





