import { useState } from "react";

const CalculadoraImc = () => {
  // sessão 2: estados
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [impedancia, setImpedancia] = useState("");
  const [resultado, setResultado] = useState(null);
  const [classificacao, setClassificacao] = useState("");

    const calcularImc = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    if (!pesoNum || !alturaNum || pesoNum <= 0 || alturaNum <= 0) {
      alert("Preencha peso e altura corretamente.");
      return;
    }

    const imc = pesoNum / (alturaNum * alturaNum);
    setResultado(imc.toFixed(2));

    if (imc < 18.5) {
      setClassificacao("Abaixo do peso");
    } else if (imc < 24.9) {
      setClassificacao("Peso normal");
    } else if (imc < 29.9) {
      setClassificacao("Sobrepeso");
    } else if (imc < 34.9) {
      setClassificacao("Obesidade grau I");
    } else if (imc < 39.9) {
      setClassificacao("Obesidade grau II");
    } else {
      setClassificacao("Obesidade grau III");
    }
  };