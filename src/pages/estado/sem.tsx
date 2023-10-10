import PagComponente from "@/components/pagina";
import "../../app/globals.css"

export default function PaginaSemEstado() {
  let numero = 0

  function incrementar() {
    numero += 1
    console.log(numero)
  }

  return (
    <PagComponente
      titulo="Sem Estado"
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