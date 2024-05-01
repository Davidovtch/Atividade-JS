const requestURL = "https://economia.awesomeapi.com.br/last/USD-BRL"
const request = new Request(requestURL,{method:"GET"});
const carro = {
    Marca: 'Fiat',
    Modelo: 'Palio',
    Cor: 'Prata',
    Flex: 'Sim',
    Ano: 2005
}
var x = "R$ 10,5";

function q1() {
    console.log(x,typeof(x));
    x = parseFloat(x.replace("R$ ",""));
    console.log(x,typeof(x));
}

function q2() {
    const int = parseFloat(document.getElementById("2").value);
    
    console.log(`R$ ${int}`);
}

function q3() {

    Object.keys(carro).forEach(key => {
        console.log(key, carro[key]);
      });
}

function q4() {
    let div4 = document.getElementById("q4");
    
    console.log(div4);
}

async function q5() {
    const inp = parseFloat(document.getElementById("5").value);
    const response = await fetch(request);
    const result = await response.json();
    const dol = parseFloat(result["USDBRL"]["bid"]);

    alert(`Valor em dólar:$${dol*inp}`);
}

function q6() {
    const in1 = parseInt(document.getElementById("6.1").value);
    const in2 = parseInt(document.getElementById("6.2").value);
    const in3 = document.getElementById("6.3").value;

    switch (in3) {
        case "Soma" || "soma":
            alert(in1+in2);
            console.log(in1+in2);
        break;
        case "Subtração" || "subtração":
            alert(in1-in2);
            console.log(in1-in2);
        break;
        case "Multiplicação" || "multiplicação":
            alert(in1*in2);
            console.log(in1*in2);
        break;
        case "Divisão" || "divisão":
            alert(in1/in2);
            console.log(in1/in2);
        break;
        default:
        break;
    }
}