import Menu from "./Menu";
import Cabecalho from "./cabecalho";
import Conteudo from "./conteudo";
import Rodape from "./rodape";

export default function PagComponente(props: any) {
  console.log(props);
  return (
    <div
      className="
    flex  h-screen
    p-5 gap-5
    bg-black text-white"
    >
      <Menu />
      <div className="flex flex-col flex-1 gap-5">
        <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
        <Conteudo>
          {props.children}
        </Conteudo>
        <Rodape autor={props.autor} criadoEm={props.criadoEm} />
      </div>
    </div>
  );
}
