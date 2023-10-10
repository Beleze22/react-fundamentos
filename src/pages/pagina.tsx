import Link from "next/link";
import "../app/globals.css";
import PagComponente from "@/components/pagina";

export default function Pagina() {

  function executar() {
    console.log('O botão foi pressionado!')
  }

  const ano = new Date().getFullYear();
  return (
    <PagComponente
      titulo="Minha página"
      subtitulo="Estou na pasta Pages! 222"
      autor="Feito com ❤️ por Gustavo Beleze"
      criadoEm={`Desenvolvido em ${ano}`}>
      <Link href={"/"}>
        <button
          onClick={executar}
          className="bg-blue-500 p-2 rounded-md"
        >
          Teste
        </button>
      </Link>

    </PagComponente>
  );
}
