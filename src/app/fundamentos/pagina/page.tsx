import Menu from "@/components/Menu";
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
      <div className="flex flex-1 gap-4">
        <Menu />
        <Conteudo>
          <ul className="list-disc">
            <li>Ana</li>
            <li>Gustavo</li>
            <li>Claudia</li>
            <li>Zico</li>
          </ul>
        </Conteudo>
      </div>
      <Rodape
        autor="Feito com ❤️ por Gustavo Beleze"
        criadoEm={`Desenvolvido em ${new Date().getFullYear()}`}
      />
    </div>
  );
}
