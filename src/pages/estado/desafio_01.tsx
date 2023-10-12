import PagComponente from "@/components/pagina";
import { use, useState } from "react";
import { IconMinus, IconPlus } from "@tabler/icons-react";

export default function PaginaContador() {

  const [num, setNum] = useState(0)
  const [delta, setDelta] = useState(1)

  function mais() {
    setNum(num + delta)
  }

  function menos() {
    setNum(num - delta)
  }

  function deltaMais() {
    setDelta(delta + 1)
  }

  function deltaMenos() {
    setDelta(delta - 1)
  }

  return (
    <PagComponente
      titulo="Desafio #01 - Contador"
      subtitulo="Capítulo Estado"
      autor="Gustavo Beleze"
      criadoEm="2023">
      <div className="flex flex-col justify-center items-center h-full w-full gap-5 font-black">
        <span className="bg-slate-400 bg-opacity-30 w-32 h-32 rounded-3xl text-6xl flex justify-center items-center">{num}</span>
        <div className="flex gap-5">
          <button className="bg-purple-500 botao-lg" onClick={menos}>
            <IconMinus size={35} />
          </button>
          <button className="bg-purple-900 botao-lg" onClick={mais}>
            <IconPlus size={35} />
          </button>
        </div>
        <div className="flex gap-3">
          <button className="bg-blue-500 botao-sm" onClick={deltaMenos}>
            <IconMinus size={20} />
          </button>
          <span>{delta}</span>
          <button className="bg-blue-900 botao-sm" onClick={deltaMais}>
            <IconPlus size={20} />
          </button>
        </div>
      </div>
    </PagComponente>
  )
}