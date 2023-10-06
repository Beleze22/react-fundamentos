import PagComponente from "@/components/pagina";
import { IconBrandReact } from "@tabler/icons-react"

export default function Home() {
  return (
    <PagComponente
      titulo="Fundamentos React"
      subtitulo="Bem vindo ao mundo do React"
      autor="Gustavo Beleze"
      criadoEm="2023">
      <div className={`
      flex flex-col justify-center items-center
      w-full h-full
      `}>
        <IconBrandReact size={200} stroke={1} />
        <span>Curso Fundamentos de React</span>
      </div>
    </PagComponente>
  )
}
