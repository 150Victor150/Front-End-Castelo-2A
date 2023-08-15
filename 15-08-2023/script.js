const produtoForm = 
    document.getElementById("produtoForm");
const buscar = 
    document.getElementById("buscar");
const produtoLista = 
    document.getElementById("produtoLista");

produtoForm.addEventListener('submit', adicionar);

const produtos = []; //vetor

function adicionar(){
    event.preventDefault();
    var produtoNome = 
        document.getElementById("produtoNome").value;
    var produtoPreco =
        document.getElementById("produtoPreco").value;

            //casaV é um elemento do meu vetor
    var casaV = { nome: produtoNome, preco: produtoPreco};
    produtos.push(casaV);
    imprimirLista();
}

function imprimirLista(){
    produtoLista.innerHTML = '';
    for(let i = 0; i < produtos.length; i++){
        var elem = produtos[i];
        var li = document.createElement('li');
        li.innerHTML = `${elem.nome} - R$ ${elem.preco}`;
        produtoLista.appendChild(li);
    }
}