let pontos = [];
let w = false;

let myVar = window.setInterval(wait, 1000/10);

function wait(){
	w = false;
}

window.addEventListener("mousemove", function(e){
	if(w){return;}
	if(pontos.length >= 8){
		let apaga = pontos.shift();
		apaga.remove();
	}
	let dot = document.createElement("div");
	dot.className = "dot";
	dot.style.left = (event.pageX - 4) + "px";
	dot.style.top = (event.pageY - 4) + "px";
	pontos.push(dot);
	document.body.appendChild(dot);
	w = true;
	console.log(pontos.length);
});