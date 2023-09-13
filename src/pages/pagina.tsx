import Cabecalho from "@/components/cabecalho";
import "../app/globals.css";
import Conteudo from "@/components/conteudo";
import Rodape from "@/components/rodape";

export default function Pagina() {
  const ano = new Date().getFullYear();
  return (
    <div
      className="
    flex flex-col h-screen
    p-5 gap-5
    bg-black text-white"
    >
      <Cabecalho titulo="Minha página" subtitulo="Estou na pasta Pages!" />
      <Conteudo />
      <Rodape
        autor="Feito com ❤️ por Gustavo Beleze"
        criadoEm={`Desenvolvido em ${ano}`}
      />
    </div>
  );
}
