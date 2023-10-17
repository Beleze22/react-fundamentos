import { IconArrowBadgeRight, IconCode, IconForms, IconNumbers } from "@tabler/icons-react"
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <div
      className="
    flex flex-col justify-start items-center w-72
    bg-black p-4 gap-2
    "
    >
      <span className="self-start text-sm text-zinc-500 pl-3 pt-4">Estado</span>
      <MenuItem icone={<IconCode />} texto="Componente sem Estado" url="/estado/sem" />
      <MenuItem icone={<IconCode />} texto="Componente com Estado" url="/estado/com" />
      <MenuItem icone={<IconNumbers />} texto="Desafio #01 - Contador" url="/estado/desafio_01" />
      <MenuItem icone={<IconForms />} texto="Campo de Texto" url="/estado/campoTexto" />
      <span className="self-start text-sm text-zinc-500 pl-3 pt-4">Componentes</span>
      <MenuItem icone={<IconArrowBadgeRight />} texto="Básico" url="/componentes/basico" />
      <MenuItem icone={<IconArrowBadgeRight />} texto="Título" url="/componentes/titulo" />
      <MenuItem icone={<IconArrowBadgeRight />} texto="Trecho" url="/componentes/trecho" />
      <span className="self-start text-sm text-zinc-500 pl-3 pt-4">Fundamentos</span>
      <MenuItem icone={<IconArrowBadgeRight />} texto="Funções" url="/fundamentos/funcoes" />
      <MenuItem icone={<IconArrowBadgeRight />} texto="Soma" url="/fundamentos/soma" />
      <MenuItem icone={<IconArrowBadgeRight />} texto="Página #1" url="/fundamentos/pagina" />
      <MenuItem icone={<IconArrowBadgeRight />} texto="Página #2" url="/pagina" />
    </div>
  );
}
