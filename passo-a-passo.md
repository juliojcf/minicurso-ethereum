# Passo a passo da implementação de um contrato inteligente

- Criação de conta no Metamask, a carteira Ethereum;
- Geração de ethers fictícios a partir do site goerlifaucet.com (envolve criação de uma conta Alchemy);
- Configuração do ambiente de desenvolvimento:
  - Download do Node.js (sudo apt install node.js);
  - Criação de package.json com configuração do projeto (npm init);
  - Comandos para instalar módulos e ferramentas (npm install --save @truffle/hdwallet-provider dotenv solc web3);
  - Criação do contrato inteligente (cópia do Parabens.sol);
  - Criação dos scripts de compilação e de implementação escritos em JavaScript (cópia do compile.js e do deploy.js);
  - Criação de conta no Infura, através do qual será acessado um nó da blockchain e será possível implementar o contrato inteligente em uma rede Ethereum;
  - Criação de arquivo .env com as palavras mnemônicas de acesso à conta Metamask e com o link para o endereço obtido no Infura;
  - Comentar a linha module.exports e descomentar a linha console.log ao final do compile.js;
  - Compilar o contrato inteligente (node compile.js);
  - Comentar a linha console.log e descomentar a linha module.exports ao final do compile.js;
  - Configurar a versão do openssl para evitar erros de incompatibilidade (export NODE_OPTIONS=--openssl-legacy-provider);
  - Implementação do contrato inteligente (node deploy.js);
  - Copiar o endereço do contrato inteligente e guardá-lo!
