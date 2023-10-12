import Link from "next/link";
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
          className="botao"
        >
          Teste
        </button>
      </Link>

    </PagComponente>
  );
}
