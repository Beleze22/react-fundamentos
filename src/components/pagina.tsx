import Menu from "./Menu";
import Cabecalho from "./cabecalho";
import Conteudo from "./conteudo";
import Rodape from "./rodape";

interface PagComponenteProps {
  titulo: string
  subtitulo: string
  children: any
  autor: string
  criadoEm: string
}

export default function PagComponente(props: PagComponenteProps) {
  return (
    <div
      className="
    flex  h-screen
    p-5 gap-5
    bg-black text-white"
    >
      <Menu />
      <div className="flex flex-col flex-1 gap-5">
        <Cabecalho
          titulo={props.titulo}
          subtitulo={props.subtitulo}
          className="h-36 bg-gradient-to-r from-blue-700 to-zinc-800" />
        <Conteudo>
          {props.children}
        </Conteudo>
        <Rodape autor={props.autor} criadoEm={props.criadoEm} />
      </div>
    </div>
  );
}
