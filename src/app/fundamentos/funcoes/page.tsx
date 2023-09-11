export default function Page() {
  function renderizarTitulo() {
    return (
      <div>
        <h1 className="text-green-700">Titulo</h1>
        <h2>Subtitulo</h2>
      </div>
    );
  }

  function renderizarConteudo() {
    return (
      <ul>
        <li>Ana</li>
        <li>Carlos</li>
        <li>Zico</li>
      </ul>
    );
  }

  return (
    <div>
      {renderizarTitulo()}
      <hr />
      {renderizarConteudo()}
    </div>
  );
}
