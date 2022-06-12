function fodase(){
    document.getElementById("demo").innerHTML = "Fodase CSS";
}

// Using innerHTML
document.getElementById("vazio").innerHTML = 5*9;

// Using document.write()
document.write(9*9);

function doc_write(){
    alert("Cuidado! Usar o 'document.write' depois da página já estar carregada deleta todo o conteúdo");
    document.write("Tá vendo?");
    // Use esse método só pra testar
}

// Using console.log()
console.log("Também da pra cuspir resultado aqui");

// https://www.w3schools.com/js/js_statements.asp
let x, y, z;    // statement 1
x = 5;          // statement 2
y = 6;          // statement 3
y = x + y;      // statement 4

let a, b, c;
a = 1; b = 2; c = a + b;

console.log(c)

document.getElementById("demo").innerHTML =
"mozovo";

// how to declare variables
let cu, bosta;

// how to use variables
cu = "onde sai merda\n";
bosta = "sai do cu";

let fezes = cu + bosta;

console.log(fezes);

document.getElementById("cu").innerHTML = (5 + 6) * 10;

// comentário de uma linha
/* 
Comentário multi-linha
fodapacacete
*/
document.getElementById("myH").innerHTML = "Meu Header";
document.getElementById("myP").innerHTML = "Meu Parágrafo.";

// https://www.w3schools.com/js/js_variables.asp
/*
    No javascript dá pra declarar variáveis de 4 jeitos:
    var     - esse é coisa de véio
    let     - usa esse aqui em vez de var
    const   - se o valor n vai mudar usa esse aqui
    usar nada - fodase
*/
var hshd = "idososos";
let foda = "estiloso pacaralho";
const duro = "esse texto nunca irá mudar";
t = {"merdinha": 1};

console.log(hshd);
console.log(foda);
console.log(duro);
// console.table(t)

let nomeCarro = "Volvo";
document.getElementById("nomecarro").innerHTML = nomeCarro;

let kaka;
document.getElementById("foudasss").innerHTML = kaka;

let iii = "8" + 434 * 0;
console.log(iii)

// JavaScript Dollar Sign $
let $money = "adoro dinheiros";
