let desenha = function desenha(){
	let bar1 = document.getElementById("bar1");
  let bar2 = document.getElementById("bar2");
  let bar3 = document.getElementById("bar3");
  let bar4 = document.getElementById("bar4");
  let bar5 = document.getElementById("bar5");
  
  bar1.style.height = document.getElementById("alt1").value+"px";
  bar2.style.height = document.getElementById("alt2").value+"px";
  bar3.style.height = 
    document.getElementById("alt3").value+"px";
  bar4.style.height = 
    document.getElementById("alt4").value+"px";
  bar5.style.height = 
    document.getElementById("alt5").value+"px";
  
  bar1.style.width = document.getElementById("lar").value+"px";
  bar2.style.width = document.getElementById("lar").value+"px";
  bar3.style.width = document.getElementById("lar").value+"px";
  bar4.style.width = document.getElementById("lar").value+"px";
  bar5.style.width = document.getElementById("lar").value+"px";
}
