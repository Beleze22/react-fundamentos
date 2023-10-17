import AreaLateral from "./AreaLateral";
import Cabecalho from "./cabecalho";
import Conteudo from "./conteudo";
import Rodape from "./rodape";

interface PagComponenteProps {
  titulo: string;
  subtitulo: string;
  children: any;
  autor: string;
  criadoEm: string;
}

export default function PagComponente(props: PagComponenteProps) {
  return (
    <div
      className="
    flex  h-screen
    bg-black text-white"
    >
      <AreaLateral />
      <div className="flex flex-col flex-1">
        <Cabecalho
          titulo={props.titulo}
          subtitulo={props.subtitulo}
          className="h-16 bg-zinc-800"
        />
        <Conteudo>{props.children}</Conteudo>
        <Rodape autor={props.autor} criadoEm={props.criadoEm} />
      </div>
    </div>
  );
}
