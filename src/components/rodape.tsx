interface RodapeProps {
  autor: string
  criadoEm: string
}

export default function Rodape(props: RodapeProps) {
  return (
    <div
      className="
  flex justify-between items-center
  h-16 px-5 rounded-lg text-sm
  bg-cyan-600
  "
    >
      <h3>{props.autor}</h3>
      <h3>{props.criadoEm}</h3>
    </div>
  );
}
