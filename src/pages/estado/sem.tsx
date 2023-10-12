import PagComponente from "@/components/pagina";

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
        <button className="botao" onClick={incrementar}>
          Incrementar
        </button>
      </div>
    </PagComponente>
  )
}