(function () {

    const TAM = 40;
    let FPS; //FPS deixa de ser uma constante e se torna uma variável global
    let start = false;
    let pausado = false;
    let end = false;
    let board;
    let snake;
    let pontos;
    let comida;
    
    function init() {
        FPS = 5; //definição inicial de FPS
        board = new Board();
        snake = new Snake();
        comida = new Food();
        pontos = new Pontuacao();
    }

    window.addEventListener("keydown", function(e) {
        if(start){//impede que mude a direção antes que o jogo comece/recomece
            switch(e.key) {            
            case "ArrowUp":
                snake.mudarDirecao(0);
                break;
            case "ArrowRight":
                snake.mudarDirecao(1);
                break;
            case "ArrowDown":
                snake.mudarDirecao(2);
                break;              
            case "ArrowLeft":
                snake.mudarDirecao(3);
                break;                  
            }
        }
    });
    //função usada para mostrar 0 a esquerda no placar, retirada de: https://stackoverflow.com/questions/2998784/how-to-output-numbers-with-leading-zeros-in-javascript
    function pad(num, size) { 
        num = num.toString();
        while (num.length < size) num = "0" + num;
        return num;
    }
    class Pontuacao{
        constructor(){
            this.pontos = 0;
            this.show = document.getElementById("placar")
            this.show.innerHTML = pad(this.pontos,5);
        }
        comeu(cor){
            if(cor === "#aa0000"){
                this.pontos += 1;
            }else{
                this.pontos += 2;
            }
            this.show.innerHTML = pad(this.pontos,5);
        }
    }

    class Board {
        constructor() {
            this.element = document.createElement("table");
            this.element.setAttribute('id','board');
            this.cor = "#EEEEEE";
            for (let i = 0; i < TAM; i++) {
                let row = document.createElement("tr");
                for (let j = 0; j < TAM; j++) {
                    let campo = document.createElement("td");
                    row.appendChild(campo);
                }
                this.element.appendChild(row);
            }
            document.body.appendChild(this.element);
        }
    }


    class Snake {
        constructor() {
            this.corpo = [[4,5],[4,6],[4,7]];
            this.cor = "#111111";
            this.passo = 0;
            this.ultimoPasso = -1;
            this.direcao = 1; // 0:cima; 1:direita; 2:baixo; 3:esquerda
            this.corpo.forEach(campo => document.querySelector(`#board tr:nth-child(${campo[0]}) td:nth-child(${campo[1]})`).style.backgroundColor = this.cor);
        }        
        gameOver(head, add){
            if(head[0] > 39 || head[1] > 39){ //caso a cobra bata no maior lado do tabuleiro
                return true;
            }if(head[0] < 0 || head[1] < 0){ //caso a cobra bata no menor lado do tabuleiro
                return true;
            }if(this.corpo.filter(item => (item[0]===add[0] && item[1] ===add[1])).length > 0){ //caso a cobra bata nela mesma
                return true;}
            else{return false;}
        }
        

        andar() {
            let head = this.corpo[this.corpo.length-1];
            let add;
            this.passo = this.passo +1;
            switch(this.direcao) {
                case 0:
                    add = [head[0]-1,head[1]];                
                    break;
                case 1:
                    add = [head[0],head[1]+1];
                    break;
                case 2:
                    add = [head[0]+1,head[1]];
                    break;  
                case 3:
                    add = [head[0],head[1]-1];
                    break;                                                            
            }
            //Clausu-las de Derrota
            if(this.gameOver(head, add)){
                fim();
            }else{
                this.corpo.push(add);
                document.querySelector(`#board tr:nth-child(${add[0]}) td:nth-child(${add[1]})`).style.backgroundColor = this.cor;
                //Clausu-la de Comida
                if(comida.pos[0] === add[0] && comida.pos[1] === add[1]){ //se a cobra comeu
                    pontos.comeu(comida.cor); //aumenta a pontuação de acordo com a cor da comida
                    comida.reset = true; //reseta a comida no run
                }else{ //se a cobra não comeu, remove o último elemento
                    let rem = this.corpo.shift();
                    document.querySelector(`#board tr:nth-child(${rem[0]}) td:nth-child(${rem[1]})`).style.backgroundColor = board.cor;
                }
            }
        }

        mudarDirecao(direcao) {
            if(this.ultimoPasso === this.passo){
                return;
            }
            this.ultimoPasso = this.passo;
            if(Math.abs(this.direcao - direcao) !== 2){ //garante que a cobra não vire 180°
                this.direcao = direcao;
            }
        }
    }

    class Food {
        constructor(){
            this.reset = false;
            this.pos = [1,1]
            this.cor = "#aa0000"; //Alterei a cor da comida normal de preto para vermelho escuro, para melhorar a visualização
            this.geraComida();
        }

        geraComida(){
            if(Math.floor(Math.random() * 3)%2 === 0){ //possiveis valores: 0, 1 e 2. 
                this.cor = "#aa0000"; //Para 0 e 2, gera comida normal
            }
            else{//Para 1, gera a comida "especial"
                this.cor = "#ff0000";
            }
            this.pos = [Math.floor(Math.random() * 40) + 1, Math.floor(Math.random() * 40) + 1];
            while(snake.corpo.includes(this.pos)){
                this.pos = [Math.floor(Math.random() * 40) + 1, Math.floor(Math.random() * 40) + 1];
            }
            document.querySelector(`#board tr:nth-child(${this.pos[0]}) td:nth-child(${this.pos[1]})`).style.backgroundColor = this.cor;
            this.reset = false;
        }
    }

    function run () {
        if(comida.reset){ //se a cobra comeu a comida
            comida.geraComida(); //gera uma nova comida
        }
        snake.andar();
    }

    //Função que incrementa a velocidade a cada segundo
    function aumenta() {
        FPS += 0.1; //incrementa FPS para ir aumentando a velocidade
        clearInterval(myVar);
        myVar = window.setInterval(run, 1000/FPS);
    }
    //Função de GameOver
    function fim(){
        clearInterval(myVar);
        clearInterval(controleVelocidade);
        document.getElementById("board").innerHTML = "Game Over<br> Press S to Restart";
        start = false;
        end = true;       
    }

    //Começa ou Recomeça o Jogo
    window.addEventListener("keydown", function(e){
        if(e.key === "s" && !(start)){
            if(end){//Limpa e Reinicia o Board caso o jogo já tenha acabado
                document.getElementById("board").remove();
                init();
            }
            myVar = window.setInterval(run, 1000/FPS);
            controleVelocidade = window.setInterval(aumenta, 1000);
            start = true;
        }
    });

    //Pausa e Despausa o jogo
    window.addEventListener("keydown", function(e){
        if(e.key === "p" && start){//Impede que você "pause" o jogo se o jogo já acabou
            if(pausado){
                myVar = window.setInterval(run, 1000/FPS);
                controleVelocidade = window.setInterval(aumenta, 1000);
                pausado = false;
            }else{
                clearInterval(myVar);
                clearInterval(controleVelocidade);
                pausado = true;
            }            
        }
    });

    init();

})();



