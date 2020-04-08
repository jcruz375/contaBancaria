function pulaLinha(){
    document.write('<br>')
}
function mostra(frase){
    document.write(frase)
    pulaLinha()
}

//const agPagador = document.getElementById('agPagador')
//const ccPagador = document.getElementById('ccPagador')

const agencia = prompt('qual sua agencia')
const contaCorrente = prompt('Qual sua conta')
const contaNum = prompt('para qual conta ira transferir')
const valorTransf = parseFloat(prompt('qual valor a ser transferido'))

const myAccount = {
    ag: agencia ,
    cc: contaCorrente ,
    saldo: 100,
    dono: 'João'
}

const conta02 = {
    ag: '1234',
    cc: '30003-2',
    saldo: 10,
    dono: 'Maria'
}

const conta3 = {
    ag: '1234',
    cc: '30003-3',
    saldo: 5000,
    dono: 'carlota'
}

function fazerTransferencia(){
    if(myAccount.saldo >= valorTransf){
        let novoValor = myAccount.saldo - valorTransf
        let valor02 = conta02.saldo + valorTransf
        mostra(myAccount.dono + ' tinha: R$' + myAccount.saldo + ' após a transferencia tem: R$' + novoValor)
        mostra(conta02.dono + ' tinha: R$' + conta02.saldo + ' após a transferencia tem: R$' + valor02 )
    }else{mostra('saldo insuficiente')}


}





if(myAccount.saldo >= valorTransf){
    let novoValor = myAccount.saldo - valorTransf
    let valor02 = conta02.saldo + valorTransf
    mostra(myAccount.dono + ' tinha: R$' + myAccount.saldo + ' após a transferencia tem: R$' + novoValor)
    mostra(conta02.dono + ' tinha: R$' + conta02.saldo + ' após a transferencia tem: R$' + valor02 )
}else{mostra('saldo insuficiente')}