window.onload = onLoad;
function onLoad(){
  var memory = new Array(0, 0, 0);
  var idname = new Array("num100", "num10", "num1");
  var k = 0;
  var today = new Date();
  var real = new Date(2019,4,31);
  var rest = Math.ceil((real-today)/86400000);
  for (var i=100; i>=1; i/=10) {
    var span = document.createElement("span");
    span.setAttribute("class", "countdownparts");
    switch (Math.floor(rest/i)) {
      case 1: span.classList.add("count1");
      break;
      case 2: span.classList.add("count2");
      break;
      case 3: span.classList.add("count3");
      break;
      case 4: span.classList.add("count4");
      break;
      case 5: span.classList.add("count5");
      break;
      case 6: span.classList.add("count6");
      break;
      case 7: span.classList.add("count7");
      break;
      case 8: span.classList.add("count8");
      break;
      case 9: span.classList.add("count9");
      break;
      default:span.classList.add("count0");
      break;
    }
    memory[k] = Math.floor(rest/i);
    console.log(rest/i);
    span.setAttribute("id", idname[k]);
    k++;
    var parent = document.getElementById("display");
    parent.appendChild(span);
    rest %= i;
  }

setTimeout(function(){
  var roll100 = document.getElementById("num100");
  var roll10 = document.getElementById("num10");
  var roll1 = document.getElementById("num1");
  var i = 0;
  var count = new Array("count0", "count1", "count2", "count3", "count4", "count5", "count6", "count7", "count8", "count9");

  var fun = setInterval(function(){
    var cn0 = (memory[0]+i)%10;
    var cn1 = (memory[1]+i)%10;
    var cn2 = (memory[2]+i)%10;
    if(i <= 100){
      roll100.classList.add(count[cn0]);
      roll10.classList.add(count[cn1]);
      roll1.classList.add(count[cn2]);
      if(cn0 === 0){
        roll100.classList.remove("count9");
      }else{
        roll100.classList.remove(count[cn0-1]);
      }
      if(cn1 === 0){
        roll10.classList.remove("count9");
      }else{
        roll10.classList.remove(count[cn1-1]);
      }
      if(cn2 === 0){
        roll1.classList.remove("count9");
      }else{
        roll1.classList.remove(count[cn2-1]);
      }
    }else if(i <= 200){
      roll10.classList.add(count[cn1]);
      roll1.classList.add(count[cn2]);
      if(cn1 === 0){
        roll10.classList.remove("count9");
      }else{
        roll10.classList.remove(count[cn1-1]);
      }
      if(cn2 === 0){
        roll1.classList.remove("count9");
      }else{
        roll1.classList.remove(count[cn2-1]);
      }
    }else if(i <= 300){
      roll1.classList.add(count[cn2]);
      if(cn2 === 0){
        roll1.classList.remove("count9");
      }else{
        roll1.classList.remove(count[cn2-1]);
      }
    }else{
      clearInterval(fun);
    }
    i++;
  }, 10);
}, 10);
};
