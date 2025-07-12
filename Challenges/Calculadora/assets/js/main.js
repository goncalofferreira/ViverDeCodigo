// const botoes = document.querySelectorAll(".btn");
// const displayOutput = document.querySelector(".output");
// const displayHistorico = document.querySelector(".history");

// let operacaoAtual = "";

// botoes.forEach((botao) => {
//   botao.addEventListener("click", () => {
//     const valor = botao.dataset.valor || botao.innerText;

//     switch (valor) {
//       case "=":
//         try {
//           const resultado = eval(operacaoAtual.replace("x", "*"));
//           displayHistorico.innerText = operacaoAtual;
//           displayOutput.innerText = resultado;
//           operacaoAtual = resultado.toString();
//         } catch {
//           displayOutput.innerText = "Erro";
//           operacaoAtual = "";
//         }
//         break;
//       case "C":
//         operacaoAtual = "";
//         displayOutput.innerText = "";
//         displayHistorico.innerText = "";
//         break;
//       case "⌫":
//         operacaoAtual = operacaoAtual.slice(0, -1);
//         displayOutput.innerText = operacaoAtual;
//         break;
//       default:
//         operacaoAtual += valor;
//         displayOutput.innerText = operacaoAtual;
//     }
//   });
// });

// Espera que o DOM carregue antes de executar o JS
document.addEventListener("DOMContentLoaded", function () {
  const botoes = document.querySelectorAll(".btn");
  const displayOutput = document.querySelector(".output");
  const displayHistorico = document.querySelector(".history");

  let operacaoAtual = "";

  // Adiciona valor à expressão atual
  function adicionarValor(valor) {
    const operadores = ["+", "-", "*", "/", "%", "."];

    const ultimoChar = operacaoAtual.slice(-1);

    // Evita múltiplos operadores seguidos
    if (operadores.includes(valor) && operadores.includes(ultimoChar)) {
        // Substitui o último operador se o utilizador pressionar outro logo a seguir
        operacaoAtual = operacaoAtual.slice(0, -1);
    }

    operacaoAtual += valor;
    displayOutput.innerText = operacaoAtual;
  }

  // Limpa todos os campos (reset total)
  function limparTudo() {
    operacaoAtual = "";
    displayOutput.innerText = "";
    displayHistorico.innerText = "";
  }

  // Apaga o último caracter da expressão atual
  function apagarUltimo() {
    operacaoAtual = operacaoAtual.slice(0, -1);
    displayOutput.innerText = operacaoAtual;
  }

  // Tenta calcular o resultado da expressão
  function calcularResultado() {
    try {
      const resultado = Function(`return ${operacaoAtual}`)(); // mais seguro que eval()
      displayHistorico.innerText = operacaoAtual;
      displayOutput.innerText = resultado;
      operacaoAtual = resultado.toString(); // permite continuar com base no resultado
    } catch (erro) {
      displayOutput.innerText = "Erro";
      operacaoAtual = "";
    }
  }

  // Evento de clique para cada botão
  botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
      const valor = botao.dataset.valor || botao.innerText;

      switch (valor) {
        case "=":
          calcularResultado();
          break;
        case "C":
          limparTudo();
          break;
        case "⌫":
          apagarUltimo();
          break;
        default:
          adicionarValor(valor);
      }
    });
  });
});

