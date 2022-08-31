// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract Parabens{
    address payable public aniversariante;
    address payable[] public doadores;
    string mensagem;

    constructor() {
        aniversariante = payable(msg.sender);
    }

    function doaValor() public payable {
        require(msg.value >= 0.01 ether);
        doadores.push(payable(msg.sender));
    }

    function resgatarDoacoes() public verificaAniversariante {
        aniversariante.transfer(address(this).balance);
    }

    modifier verificaAniversariante() {
        require(msg.sender == aniversariante);
        _;
    }

    function enviaMensagem(string memory m) public {
        mensagem = m;
    }

    function recebeMensagem() public view returns (string memory m) {
        return mensagem;
    }
}
