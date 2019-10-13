window.onload = onLoad;
function onLoad(){
  const navMenu = document.getElementById("navimg");
  const nav = document.getElementById("navcon");

	navMenu.onclick = function(){
		nav.classList.toggle("on");
	}

  var width = window.innerWidth;
  console.log(width);
}
