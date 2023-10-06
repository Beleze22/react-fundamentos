import { Icon360View } from "@tabler/icons-react";
import { IconHome } from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <div
      className="
    flex flex-col justify-start items-center w-52
    bg-black text-3xl p-4 gap-2
    "
    >
      <MenuItem icone={<IconHome />} texto="Página #1" url="/fundamentos/pagina" />
      <MenuItem icone={<Icon360View />} texto="Página #2" url="/pagina" />
    </div>
  );
}
