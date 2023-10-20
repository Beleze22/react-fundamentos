import Botoes from "@/components/comunicacao/direta/Botoes";
import PagComponente from "@/components/pagina";

export default function PaginaDireta() {
  return (
    <PagComponente
      titulo="Comunicação Direta"
      subtitulo="Capítulo Comunicação"
      autor="Gustavo Beleze"
      criadoEm="2023"
    >
      <Botoes />
    </PagComponente>
  );
}
