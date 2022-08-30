# Passo a passo da prática do minicurso

## Passos iniciais

- Criação de conta no Metamask, a carteira Ethereum;
- Geração de ethers fictícios a partir do site goerlifaucet.com (envolve criação de uma conta Alchemy);


## Implementação de um contrato inteligente

- Configuração do ambiente de desenvolvimento:
  - Download do Node.js (sudo apt install node.js);
  - Criação de package.json com configuração do projeto (npm init);
  - Comandos para instalar módulos e ferramentas (npm install --save @truffle/hdwallet-provider dotenv solc web3);
- Criação de pasta para os arquivos do contrato inteligente (mkdir parabens-contrato) e subpasta para o contrato (dentro da parabens-contrato: mkdir contracts);
- Criação do contrato inteligente (cópia do Parabens.sol);
- Criação dos scripts de compilação e de implementação escritos em JavaScript (cópia do compile.js e do deploy.js);
- Criação de conta no Infura, através do qual será acessado um nó da blockchain e será possível implementar o contrato inteligente em uma rede Ethereum;
- Criação de arquivo .env com as palavras mnemônicas de acesso à conta Metamask e com o link para o endereço obtido no Infura;
- Comentar a linha module.exports e descomentar a linha console.log ao final do compile.js;
- Compilar o contrato inteligente (node compile.js);
- Comentar a linha console.log e descomentar a linha module.exports ao final do compile.js;
- Em caso da versão do Node.js não ser a atual, configurar a versão do openssl para evitar erros de incompatibilidade (export NODE_OPTIONS=--openssl-legacy-provider);
- Implementação do contrato inteligente (node deploy.js);
- Copiar o endereço do contrato inteligente e guardá-lo!


## Implementação do DApp

- Instalação do React (sudo npm install create-react-app -g);
- Comando de criação do projeto (create-react-app parabens-react);
- Alteração do conteúdo da pasta, apagando tudo dentro de "src" e copiando os arquivos web3.js, parabens.js, App.js e index.js;
- Substituição do endereço do contrato no parabens.js;
- Caso os módulos e ferramentas (como o web3) estejam instalados apenas na pasta do contrato, instalá-los também na pasta da interface;
- Para evitar erros de incompatibilidade, alterar a versão do react-scripts no package.json para uma versão mais antiga (como a 4.0.3);
- Instalação de dependências restantes (npm install --save);
- Execução do DApp (npm start).

No fim, responder ao questionário final!
