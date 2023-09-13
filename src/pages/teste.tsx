import PagComponente from "@/components/pagina";

export default function Teste() {
  function renderizarConteudoPag() {
    return (
      <div>
        <ul className="list-disc">
          <li>Ana</li>
          <li>Gustavo</li>
          <li>Claudia</li>
          <li>Zico</li>
        </ul>
      </div>
    );
  }
  return (
    <div>
      <PagComponente
        titulo="Componente Página"
        subtitulo="Estou usando o componente página"
      />
    </div>
  );
}
