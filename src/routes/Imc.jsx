import { useState } from "react";
import "../css/imc.css";

const Imc = () => {
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
    <section className="calculadora-imc pagina">
      <div className="container">
        <div className="calculadora-card">
          <h2 className="info-titulo">
            Calculadora <span>IMC</span>
          </h2>
          <p className="calculadora-texto">
            Preencha seus dados para calcular seu índice de massa corporal.
          </p>

          <div className="campo-imc">
            <label htmlFor="peso">Peso (kg):</label>
            <input
              id="peso"
              type="number"
              placeholder="Ex: 70"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
            />
          </div>

          <div className="campo-imc">
            <label htmlFor="altura">Altura (m):</label>
            <input
              id="altura"
              type="number"
              step="0.01"
              placeholder="Ex: 1.70"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
            />
          </div>

          <div className="campo-imc">
            <label htmlFor="impedancia">Impedância (opcional):</label>
            <input
              id="impedancia"
              type="number"
              placeholder="Ex: 500"
              value={impedancia}
              onChange={(e) => setImpedancia(e.target.value)}
            />
          </div>

          <div className="acoes-imc">
            <button className="btn-planos" onClick={calcularImc}>
              Calcular
            </button>

            <button className="btn-outline" onClick={limparCampos}>
              Limpar
            </button>
          </div>

          {resultado && (
            <div className="resultado-imc">
              <h3>Resultado: {resultado}</h3>
              <p>Classificação: {classificacao}</p>
              {impedancia && <p>Impedância informada: {impedancia}</p>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Imc;