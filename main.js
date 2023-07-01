const btnAtvCad = document.querySelector('#atv-cad');
const btnCancelCad = document.querySelector('#sair');
const agenda = document.querySelector('.agenda');
const cadastro = document.querySelector('.cadastro');
const btnSalva = document.querySelector('#salvar');
const totalNome = [];
const totalNum = [];
let linhas = '';

function cancelCad(){
    agenda.style.display = 'flex';
    cadastro.style.display = 'none';
}
function atvCad(){
    agenda.style.display = 'none';
    cadastro.style.display = 'block';
}
btnCancelCad.addEventListener('click', function(){
    cancelCad()
})
btnAtvCad.addEventListener('click', function(){
    atvCad()
})
btnSalva.addEventListener('submit', function(e){
    e.preventDefault();

    addLinha();
    attTabela();
    calculaTotalCtt()
    attTotal();
})
function addLinha(){
    let nome = document.querySelector('#input-nome');
    let num = document.querySelector('#input-num');
    totalNome.push(nome.value);
    totalNum.push(num.value);
    let linha = `<tr>`
    linha += `<td>${nome.value}</td>`
    linha += `<td>${num.value}</td>`
    linha += `</tr>`
    linhas += linha
    nome.value = '';
    num.value = '';
}
function attTabela(){
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = linhas
}
function calculaTotalCtt(){
    let totalCtt = 0;
    for (let i = 0; i < totalCtt; i++) {
        totalCtt += totalNum[i];
    }
    console.log(totalCtt.length);
}
function attTotal(){
    let somatoriaCtt = calculaTotalCtt();
    let spanTotal = `<span>${somatoriaCtt}</span>`
    document.querySelector('tfoot').innerHTML = spanTotal;
}