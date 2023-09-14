import Menu from "./Menu";
import Cabecalho from "./cabecalho";
import Conteudo from "./conteudo";
import Rodape from "./rodape";

export default function PagComponente(props: any) {
  console.log(props);
  return (
    <div
      className="
    flex flex-col h-screen
    p-5 gap-5
    bg-black text-white"
    >
      <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
      <div className="flex flex-1 gap-5">
        <Menu />
        <Conteudo>
          {props.children}
        </Conteudo>
      </div>
      <Rodape autor={props.autor} criadoEm={props.criadoEm} />
    </div>
  );
}
