const counter = function counter (contador){
  return function N(){
    contador ++;
    return contador; 
  }
}

const incrementar = counter(1);

console.log("Primeira chamada " + incrementar());
console.log("Segunda chamada " + incrementar());
console.log("Terceira chamada " + incrementar());