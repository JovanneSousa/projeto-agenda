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
    calculaTotalCtt();
    attTabela();
    attTotal();
})
function addLinha(){
    let nome = document.querySelector('#input-nome');
    let num = document.querySelector('#input-num');
    if(totalNome.includes(nome.value)){
        alert('Esse contato já existe');
    }else if(totalNum.includes(num.value)){
        alert('Esse numero já existe!')
    }else{totalNome.push(nome.value);
    totalNum.push(num.value);
    let linha = `<tr>`
    linha += `<td>${nome.value}</td>`
    linha += `<td>${num.value}</td>`
    linha += `</tr>`
    linhas += linha
    nome.value = '';
    num.value = '';
    }
}
function attTabela(){
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = linhas
}
function calculaTotalCtt(){
    let totalCtt = totalNome.length;
    return totalCtt
}
function attTotal(){
    let somatoriaCtt = calculaTotalCtt();
    let spanTotal = `<tr>`
    spanTotal += `<td>Total Contatos</td>`;
    spanTotal += `<td><span>${somatoriaCtt}</span></td>`;
    spanTotal += `</tr>`;
    document.querySelector('tfoot').innerHTML = spanTotal;
}