import PagComponente from "@/components/pagina";
import { useState } from "react";

export default function Calculadora() {
  const [num1, setNum1] = useState("0");
  const [num2, setNum2] = useState("0");

  function alterarNum1(e: any) {
    const resultado = document.getElementById("result");
    resultado.className = "hidden";
    setNum1(e.target.value);
  }

  function alterarNum2(e: any) {
    const resultado = document.getElementById("result");
    resultado.className = "hidden";
    setNum2(e.target.value);
  }

  function soma(n1: string, n2: string) {
    const a = parseInt(n1);
    const b = parseInt(n2);
    return a + b;
  }

  function multiplicacao(n1: string, n2: string) {
    const a = parseInt(n1);
    const b = parseInt(n2);
    return a * b;
  }

  function divisao(n1: string, n2: string) {
    const a = parseInt(n1);
    const b = parseInt(n2);
    return a / b;
  }

  function subtracao(n1: string, n2: string) {
    const a = parseInt(n1);
    const b = parseInt(n2);
    return a - b;
  }

  function show() {
    const resultado = document.getElementById("result");
    resultado.className = "flex flex-col gap-8 items-center";
  }

  return (
    <PagComponente
      autor="Gustavo Beleze"
      criadoEm="2023"
      titulo="Calculadora"
      subtitulo="Capítulo Estado"
    >
      <div className="flex flex-col gap-10 items-center">
        <div className="flex gap-8 justify-center">
          <input
            type="number"
            className="campo w-64"
            onChange={alterarNum1}
            value={num1}
          />
          <input
            type="number"
            className="campo w-64"
            onChange={alterarNum2}
            value={num2}
          />
        </div>
        <div className="flex flex-col gap-6 items-center">
          <button className="botao" onClick={show}>
            Calcular
          </button>
          <div className="hidden" id="result">
            <span>
              {num1} + {num2} = {soma(num1, num2)}
            </span>
            <span>
              {num1} - {num2} = {subtracao(num1, num2)}
            </span>
            <span>
              {num1} * {num2} = {multiplicacao(num1, num2)}
            </span>
            <span>
              {num1} / {num2} = {divisao(num1, num2)}
            </span>
          </div>
        </div>
      </div>
    </PagComponente>
  );
}
