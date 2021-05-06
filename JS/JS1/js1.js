for(var i = 1; i < 11; i++){
  document.write(`<div class="flex-container"><table border = 1><tbody><tr><td colspan=2><b>Produtos de ${i}</b></td></tr>`)
  for(var j = 1; j <11;j++){
    document.write(`<tr><td>${i}x${j}</td><td>${i*j}</td></tr>`)
  }  
  document.write("</tbody></table></div>")
}