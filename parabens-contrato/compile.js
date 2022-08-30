/* Reaproveitando código do minicurso “Blockchain, Contratos
Inteligentes, Sistemas Web: Teoria e Prática”, ministrado
no Simpósio Brasileiro de Sistemas de Informação (SBSI) 2021. */

const path = require("path"); // linhas para indicar o caminho onde o arquivo será lido
const fs = require("fs"); // e garantir a compatibilidade de sistemas operacionais
const solc = require("solc");

// Pega o arquivo Parabens.sol e atribui a variável
const ParabensPath = path.resolve(__dirname, "contracts", "Parabens.sol");
const source = fs.readFileSync(ParabensPath, "utf8");

// * Mais informações sobre o input e output
// * https://docs.soliditylang.org/en/v0.7.4/using-the-compiler.html#output-description
var input = {
  language: "Solidity",
  sources: {
    "Parabens.sol": {
      content: source,
    },
    // Pode-se adicionar outros contratos, caso exista
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};
let contratoCompilado = JSON.parse(solc.compile(JSON.stringify(input)));

// Gera o log para investigação
// console.log(contratoCompilado.contracts["Parabens.sol"].Parabens);

// Pedimos apenas o nosso contrato para exportação
module.exports = contratoCompilado.contracts["Parabens.sol"].Parabens;