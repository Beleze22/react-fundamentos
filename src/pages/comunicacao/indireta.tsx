import Botoes from "@/components/comunicacao/direta/Botoes";
import Valor from "@/components/comunicacao/indireta/Valor";
import PagComponente from "@/components/pagina";

export default function PaginaDireta() {
  return (
    <PagComponente
      titulo="Comunicação Indireta"
      subtitulo="Capítulo Comunicação"
      autor="Gustavo Beleze"
      criadoEm="2023"
    >
      <Valor></Valor>
    </PagComponente>
  );
}
