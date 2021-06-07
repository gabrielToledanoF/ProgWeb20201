const fs = require("fs");
const http = require("http");

function listarArquivos(dir){

    let arq = [];
    let listaDeArquivos = fs.readdirSync(dir);

    for(let i = 0; i < listaDeArquivos.length; i++){
        arq.push(listaDeArquivos[i]);
    }
    
    return arq;
}

var myArgs = process.argv.slice(2);
let ls = listarArquivos("./" + myArgs);

http.createServer(function(req,res) {
    for(let i = 0; i < ls.length; i++){
        res.write(ls[i] + "\n");
    }
    res.end();
}).listen(3000);

