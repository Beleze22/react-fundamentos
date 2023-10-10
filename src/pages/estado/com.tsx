import PagComponente from "@/components/pagina";
import "../../app/globals.css"
import { useState } from "react";

export default function PaginaComEstado() {
  // Assitir aula 35 para relembrar a utilização do useState()
  // let estado = useState(0)
  // const alterarEstado = estado[1]

  // function incrementar() {
  //   alterarEstado(estado[0] + 1)
  // }

  let [numero, alterarNumero] = useState(0)

  function incrementar() {
    alterarNumero(numero + 1)
  }

  return (
    <PagComponente
      titulo="Com Estado"
      subtitulo="Capítulo Estado"
      autor="Gustavo Beleze"
      criadoEm="2023">
      <div className="flex flex-col gap-5">
        <div>
          <span>Valor: </span>
          <span>{numero}</span>
        </div>
        <button className="bg-blue-500 p-2 rounded-lg" onClick={incrementar}>
          Incrementar
        </button>
      </div>
    </PagComponente>
  )
}