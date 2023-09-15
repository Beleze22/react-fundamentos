import "../app/globals.css";
import PagComponente from "@/components/pagina";

export default function Pagina() {
  const ano = new Date().getFullYear();
  return (
    <PagComponente
      titulo="Minha página"
      subtitulo="Estou na pasta Pages! 222"
      autor="Feito com ❤️ por Gustavo Beleze"
      criadoEm={`Desenvolvido em ${ano}`}>
      <button className="bg-blue-500 p-2 rounded-md">Teste</button>
    </PagComponente>
  );
}
