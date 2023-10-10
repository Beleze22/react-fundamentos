import PagComponente from "@/components/pagina";

export default function Page() {
  return (

    <PagComponente
      titulo="Minha aplicação"
      subtitulo="O melhor app da WEB"
      autor="Gustavo Beleze"
      criadoEm={`${new Date().getFullYear()}`}>
      <ul className="list-disc">
        <li>Ana</li>
        <li>Gustavo</li>
        <li>Claudia</li>
        <li>Zico</li>
      </ul>
    </PagComponente>
  );
}
