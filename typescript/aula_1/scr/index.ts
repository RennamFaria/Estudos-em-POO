import { Conta } from './conta'
import { Correntista } from './correntista'

const joao = new Correntista('Joao da Silva', '111222333-45')
const contaJoao = new Conta('12345-67890', joao)
contaJoao.credita(100.0)
contaJoao.saldo = -10
console.log('Saldo do Joao = ', contaJoao.saldo)
console.log(joao)
