/* O código utilizado como base é do minicurso “Blockchain, Contratos
Inteligentes, Sistemas Web: Teoria e Prática”, ministrado
no Simpósio Brasileiro de Sistemas de Informação (SBSI) 2021. */

// Importa o web3
import web3 from "./web3";
// Endereço do contrato gerado no deploy
const address = "0xDcEAD617D4A93c5BA07BC908710EF28eCeb7C055";
// ABI gerada no deploy do contrato
const abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    inputs: [],
    name: 'aniversariante',
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'doaValor',
    outputs: [],
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: 'doadores',
    outputs: [{ internalType: "address payable", name: "", type: "address" }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        "name": "m",
        "type": "string"
      }
    ],
    name: 'enviaMensagem',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'recebeMensagem',
    outputs: [
      {
        "name": "m",
        "type": "string"
      }
    ],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'resgatarDoacoes',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  }
];

export default new web3.eth.Contract(abi, address);