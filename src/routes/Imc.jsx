import { useState } from "react";

const CalculadoraImc = () => {
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

  const limparCampos = () => {
    setPeso("");
    setAltura("");
    setImpedancia("");
    setResultado(null);
    setClassificacao("");
  };

  return (
    <section className="calculadora-imc">
      <h2>Calculadora IMC</h2>

      <div>
        <label>Peso (kg): </label>
        <input
          type="number"
          placeholder="Ex: 70"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>

      <div>
        <label>Altura (m): </label>
        <input
          type="number"
          step="0.01"
          placeholder="Ex: 1.70"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
      </div>

      <div>
        <label>Impedância (opcional): </label>
        <input
          type="number"
          placeholder="Ex: 500"
          value={impedancia}
          onChange={(e) => setImpedancia(e.target.value)}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <button onClick={calcularImc}>Calcular</button>
        <button onClick={limparCampos} style={{ marginLeft: "10px" }}>
          Limpar
        </button>
      </div>

      {resultado && (
        <div style={{ marginTop: "20px" }}>
          <h3>Resultado: {resultado}</h3>
          <p>Classificação: {classificacao}</p>
          {impedancia && <p>Impedância informada: {impedancia}</p>}
        </div>
      )}
    </section>
  );
};

export default CalculadoraImc;