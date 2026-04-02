import { useState } from "react";

const CalculadoraImc = () => {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [impedancia, setImpedancia] = useState("");
  const [resultado, setResultado] = useState(null);
  const [classificacao, setClassificacao] = useState("");
