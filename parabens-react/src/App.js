/* O código utilizado como base é do minicurso “Blockchain, Contratos
Inteligentes, Sistemas Web: Teoria e Prática”, ministrado
no Simpósio Brasileiro de Sistemas de Informação (SBSI) 2021. */

import React, { useState, useEffect } from "react";
// Configuração para requisições na rede
import web3 from "./web3";
// Informação do contrato
import parabens from "./parabens";

const App = () => {
  // Cria variáveis e funções de alteração
  const [aniversariante, setAniversariante] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [saldo, setSaldo] = useState("");
  const [value, setValue] = useState("");
  const [aviso, setAviso] = useState("");

  // Função assincrona que carrega os dados do contrato
  const carregarDados = async () => {
    // Pega a carteira do aniversariante do contrato
    const _aniversariante = await parabens.methods.aniversariante().call();
    // Pega o valor total vinculado ao contrato
    const _saldo = await web3.eth.getBalance(parabens.options.address);

    // Armazena os valores nas variáveis de aniversariante e saldo
    setAniversariante(_aniversariante);
    setMensagem("");
    setSaldo(_saldo);
    setValue("");
  };
  // Antes da página carregar ele chama seu conteúdo
  useEffect(() => {
    // Busca dados do contrato
    carregarDados();
  }, []);

  const doar = async (event) => {
    try {
      event.preventDefault();
      setAviso("Aguardando a validação da transação...");
      const contas = await web3.eth.getAccounts();
      await parabens.methods.doaValor().send({
        from: contas[0],
        value: web3.utils.toWei(value, "ether"),
      });
      await carregarDados();
      setAviso("Doação realizada com sucesso!");
    } catch (error) {
      if (error.code === 4001) {
        setAviso("Transação cancelada!");
      } else {
        setAviso("Transação vai contra regras do contrato");
      }
    }
  }

  const resgatar = async () => {
    try {
      setAviso("Aguardando processamento...");
      const contas = await web3.eth.getAccounts();
      await parabens.methods.resgatarDoacoes().send({
        from: contas[0],
      });
      await carregarDados();
      setAviso("Doações resgatadas!");
    } catch (error) {
      if (error.code === 4001) {
        setAviso("Transação cancelada!");
      } else {
        setAviso("Transação vai contra regras do contrato");
      }
    }
  };

  const enviamensagem = async(event) => {
    try{
      event.preventDefault();
      setAviso("Aguardando a validação da transação...");
      const contas = await web3.eth.getAccounts();
      await parabens.methods.enviaMensagem(mensagem).send({
        from: contas[0],
      });
      await carregarDados();
      setAviso("Mensagem enviada com sucesso!");
    } catch (error) {
      if (error.code === 4001) {
        setAviso("Transação cancelada!");
      } else {
        setAviso("Transação vai contra regras do contrato");
      }
    }
  }

  return (
    <div>
      <h2>Felicitações de Aniversário</h2>
      <p>Este contrato é gerenciado pelo aniversariante: {aniversariante}</p>
      <p>
        Valor atual a ser resgatado:{" "}
        {web3.utils.fromWei(saldo, "ether")} ether
      </p>
      <br />
      <form onSubmit={doar}>
        <h4>Quanto deseja doar?</h4>
        <div>
          <label>Quantidade de ether para ser enviado: </label>
          <input
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </div>
        <button>Doar</button>
      </form>
      <hr />
      <h4>Resgatar doações</h4>
      <button onClick={resgatar}>Resgatar</button>
      <hr />
      <form onSubmit={enviamensagem}>
        <h4>Que mensagem deseja enviar ao aniversariante?</h4>
        <div>
          <label>Digite a mensagem: </label>
          <input
            value={mensagem}
            onChange={(event) => setMensagem(event.target.value)}
          />
        </div>
        <button>Enviar</button>
      </form>
      <hr />
      <h1>{aviso}</h1>
      <h4>Mensagem enviada: {mensagem}</h4>
    </div>
  );
};

export default App;
