import PagComponente from "@/components/pagina";
import { atRule } from "postcss";
import { useState } from "react";

export default function PaginaCampoTexto() {

  const [valor, setValor] = useState('')

  function alterar() {
    setValor('Maria')
  }

  function alterarValor(e: any) {
    console.log(e.target.value)
    setValor(e.target.value)
  }

  return (
    <PagComponente
      titulo="Campo de Texto"
      subtitulo="Capítulo Estado"
      autor="Gustavo Beleze"
      criadoEm="2023"
    >
      <div className="flex flex-col gap-5 items-start">
        <input
          type="text"
          className="campo"
          value={valor}
          onChange={alterarValor} />
        <button
          className="botao"
          onClick={alterar}
        >Alterar</button>
        <span>{valor}</span>
      </div>
    </PagComponente>
  )
}