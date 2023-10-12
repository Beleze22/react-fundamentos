import PagComponente from "@/components/pagina";

export default function Teste() {
  return (
    <PagComponente
      titulo="Componente Página"
      subtitulo="Estou usando o componente página"
      autor="Criado com ❤ por Gustavo Beleze"
      criadoEm={`Desenvolvido em ${new Date().getFullYear()}`}
    >
      <ul className="list-disc">
        <li>Claudia</li>
        <li>Gustavo</li>
        <li>Ana</li>
        <li>Johson</li>
      </ul>
    </PagComponente>
  );
}
