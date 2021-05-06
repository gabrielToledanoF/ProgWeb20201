class IntegerSet {
  constructor(max){
    this.max = max;
    this.nums = new Array(max);
    for(let i = 0; i < this.nums.length; i++){
      this.nums[i] = false;
    }
  }
  insere(value){
    if(value <= this.max){
      this.nums[value] = true;
    }
  }
  exclui(value){
    if(value <= this.max){
      this.nums[value] = false;
    }
  }
  conversao(){
    let aux = [];
    for(let i = 0; i < this.max; i++){
      if(this.nums[i]){aux.push(i.toString())}
    }
    return aux;
  }
  static uniao (a, b){
    let newConj;
    if(a.max > b.max){
      let newConj = new IntegerSet(a.max);
    } else {newConj = new IntegerSet(b.max);}
    for(let i = 0; i < newConj.max; i++){
      if(a.nums[i] || b.nums[i]){
        newConj.nums[i] = true;
      }
    }
    return newConj;
  }
  
  static intersecao (a, b){
    let newConj;
    if(a.max < b.max){
      newConj = new IntegerSet(a.max);
    } else {newConj = new IntegerSet(b.max);}
    for(let i = 0; i < newConj.max; i++){
      if(a.nums[i] && b.nums[i]){
        newConj.nums[i] = true;
      }
    }
    return newConj;
  }
  
  static diferenca (a, b){
    let newConj = new IntegerSet(a.max);
    for(let i = 0; i < a.max; i++){
      if(a.nums[i] && !(b.nums[i])){
        newConj.nums[i] = true;
      }
    }
    return newConj;
  }
}

let a = new IntegerSet(5);
for(let i = 0; i < 5; i++){
  a.insere(i)
}
a.exclui(2)
console.log("Conj A: [" + a.conversao() + "]")

let b = new IntegerSet(7);
b.insere(2);
b.insere(4);
b.insere(6);
console.log("Conj B: [" + b.conversao() + "]")

let c = IntegerSet.uniao(a,b);
console.log("União de A e B: [" + c.conversao() +"]")

let d = IntegerSet.intersecao(a,b);
console.log("Interseção de A e B: [" + d.conversao() + "]")

let e = IntegerSet.diferenca(a,b);
console.log("Diferença de A e B: [" + e.conversao() + "]")
