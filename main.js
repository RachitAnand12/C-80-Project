function names() {
    var array1 = [];
    for(i=1; i<=5; i++){
    array1.push(document.getElementById("n" + i).value);
    }
   document.getElementById("div1").innerHTML=array1.join;
  }
  