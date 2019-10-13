const shopCount = 71;
var classifi = new Array(shopCount);
var hitcount = 0;

window.onload = onLoad;
function onLoad(){
  console.log("start firebase");
  const db = firebase.database();
  const putPlace = document.getElementById("shoplist");
  for(var i=0; i<shopCount; i++){
    shopRef = db.ref('shop/shop' + (i+1));
    shopRef.once("value", function(snapshot){
      // classifi[i] = new Array();
      // classifi[i] = snapshot.child("class").val();
      // console.log(classifi[i].charAt(0));
      // var path = shopRef.toString();
      var div = document.createElement("div");
      div.setAttribute("class", "shopBox");
      putPlace.appendChild(div);
      //店名
      var pname = document.createElement("p");
      pname.setAttribute("class", "name");
      div.appendChild(pname);
      var tname = document.createTextNode(snapshot.child("name").val());
      pname.appendChild(tname);
      //商品
      var pitem = document.createElement("p");
      pitem.setAttribute("class", "item");
      div.appendChild(pitem);
      var titem = document.createTextNode("商品：" + snapshot.child("item").val());
      pitem.appendChild(titem);
      //出店団体
      var powner = document.createElement("p");
      powner.setAttribute("class", "owner");
      div.appendChild(powner);
      var towner = document.createTextNode("出店団体：" + snapshot.child("owner").val());
      powner.appendChild(towner);
      //メッセージ
      var pmessage = document.createElement("p");
      pmessage.setAttribute("class", "message");
      div.appendChild(pmessage);
      var tmessage = document.createTextNode(snapshot.child("message").val());
      pmessage.appendChild(tmessage);
      //出店日
      var pdate = document.createElement("p");
      pdate.setAttribute("class", "date");
      div.appendChild(pdate);
      var tdate = document.createTextNode("出店日：" + snapshot.child("date").val());
      pdate.appendChild(tdate);
      //出店エリア
      var parea = document.createElement("p");
      parea.setAttribute("class", "area");
      div.appendChild(parea);
      var tarea = document.createTextNode("出店エリア：" + snapshot.child("area").val() + "番エリア");
      parea.appendChild(tarea);
    });
  }
}

function onButtomClick(){
  const putPlace = document.getElementById("shoplist");
  // for(var i=0; i<shopCount; i++){
  //   console.log(classifi[i]);
  // }
  //init inner shoplist
  while(putPlace.firstChild){
    putPlace.removeChild(putPlace.firstChild);
  }
  //stack hits
  var searchWord = document.getElementById("searchText").value;
  var searchLen = searchWord.length;
  var stack = 0;
  for(var i=0; i<shopCount; i++){
    shopRef = firebase.database().ref('shop/shop' + (i+1));
    shopRef.once("value", function(snapshot){
      classifi[i] = snapshot.child("class").val();
      for(var j=0; j<=classifi[i].length; j++){
        // console.log(stack);
        if(classifi[i].charAt(j) === searchWord.charAt(stack)){
          stack++;
          if(stack >= searchLen){
            hitcount++;
            var p = document.createElement("p");
            var div = document.createElement("div");
            div.setAttribute("class", "shopBox");
            putPlace.appendChild(div);
            //店名
            var pname = document.createElement("p");
            pname.setAttribute("class", "name");
            div.appendChild(pname);
            var tname = document.createTextNode(snapshot.child("name").val());
            pname.appendChild(tname);
            //商品
            var pitem = document.createElement("p");
            pitem.setAttribute("class", "item");
            div.appendChild(pitem);
            var titem = document.createTextNode("商品：" + snapshot.child("item").val());
            pitem.appendChild(titem);
            //出店団体
            var powner = document.createElement("p");
            powner.setAttribute("class", "owner");
            div.appendChild(powner);
            var towner = document.createTextNode("出店団体：" + snapshot.child("owner").val());
            powner.appendChild(towner);
            //メッセージ
            var pmessage = document.createElement("p");
            pmessage.setAttribute("class", "message");
            div.appendChild(pmessage);
            var tmessage = document.createTextNode(snapshot.child("message").val());
            pmessage.appendChild(tmessage);
            //出店日
            var pdate = document.createElement("p");
            pdate.setAttribute("class", "date");
            div.appendChild(pdate);
            var tdate = document.createTextNode("出店日：" + snapshot.child("date").val());
            pdate.appendChild(tdate);
            //出店エリア
            var parea = document.createElement("p");
            parea.setAttribute("class", "area");
            div.appendChild(parea);
            var tarea = document.createTextNode("出店エリア：" + snapshot.child("area").val() + "番エリア");
            parea.appendChild(tarea);
            break;
          }
        }else{
          stack = 0;
        }
      }
    });
  }
  // searchbox.addEventListener('keypress', function(){
    //   if(event.keyCode === 13){
      //     var searchWord = document.form.searchbox.value;
      //     var searchLen = searchWord.length;
      //     console.log(searchLen);
      //   }
      // });
}
