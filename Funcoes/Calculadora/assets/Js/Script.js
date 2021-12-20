function calculadora() {
  const operacao = Number(
    prompt(
      "Escolha uma operação:\n 1- Soma (+)\n 2- Subtração (-)\n 3- Multiplicação (*)\n 4- Divisão Real (/)\n 5- Divisão Inteira (%)\n 6- Potenciação (**)"
    )
  );

  if (!operacao || operacao >= 7) {
    alert("Erro - operaçao inválida!");
    calculadora();
  } else {
    let n1 = Number(prompt("Insira o primerio valor: "));
    let n2 = Number(prompt("Insira o segundo valor: "));
    let resultado;

    if (!n1 || !n2) {
      alert("Erro - Parâmetro não reconhecido");
      calculadora();
    } else {
      function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
        novaOperacao();
      }
      function Subtracao() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
        novaOperacao();
      }
      function Multiplicao() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
        novaOperacao();
      }
      function DivisaoReal() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
        novaOperacao();
      }
      function DivisaoInteira() {
        resultado = n1 % n2;
        alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
        novaOperacao();
      }
      function Potenciacao() {
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2}ª é igual a ${resultado}`);
        novaOperacao();
      }

      function novaOperacao() {
        let opcao = prompt(
          "Deseja fazer outra operacao? \n 1 - Sim \n 2 - Não"
        );

        if (opcao == 1) {
          calculadora();
        } else if (opcao == 2) {
          alert("Até mais!");
        } else if (opcao == 3) {
          alert("Digite uma opção válida");
          novaOperacao();
        }
      }
    }

    // if (operacao == 1) {
    //   soma();
    // } else if (operacao == 2) {
    //   Subtracao();
    // } else if (operacao == 3) {
    //   Multiplicao();
    // } else if (operacao == 4) {
    //   DivisaoReal();
    // } else if (operacao == 5) {
    //   DivisaoInteira();
    // } else if (operacao == 6) {
    //   Potenciacao();
    // }

    switch (operacao) {
      case 1:
        soma();
        break;
      case 2:
        Subtracao();
        break;
      case 3:
        Multiplicao();
        break;
      case 4:
        DivisaoReal();
        break;
      case 5:
        DivisaoInteira();
        break;
      case 6:
        Potenciacao();
        break;
    }
  }
}

calculadora();
