import PagComponente from "@/components/pagina";
import { useState } from "react";

export default function Calculadora() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  function soma(n1: number, n2: number) {
    return n1 + n2;
  }

  function multiplicacao(n1: number, n2: number) {
    return n1 * n2;
  }

  function divisao(n1: number, n2: number) {
    return n1 / n2;
  }

  function subtracao(n1: number, n2: number) {
    return n1 - n2;
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
            onChange={e => setNum1(+e.target.value)}
            value={num1}
          />
          <input
            type="number"
            className="campo w-64"
            onChange={e => setNum2(+e.target.value)}
            value={num2}
          />
        </div>
        <div className="flex flex-col gap-6 items-center">
          {/* <button className="botao" onClick={show}>
            Calcular
          </button> */}
          <div className="flex flex-col gap-8 items-center" id="result">
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
