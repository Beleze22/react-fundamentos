import Cabecalho from "@/components/cabecalho";
import Conteudo from "@/components/conteudo";
import Rodape from "@/components/rodape";

export default function Page() {
  return (
    <div
      className="
  flex flex-col gap-4
  h-screen
  p-4
  "
    >
      <Cabecalho titulo="Minha aplicação" subtitulo="O melhor app da WEB" />
      <Conteudo />
      <Rodape />
    </div>
  );
}
