interface RodapeProps {
  autor: string;
  criadoEm: string;
}

export default function Rodape(props: RodapeProps) {
  return (
    <div
      className="
  flex justify-between items-center
  h-16 px-5 text-base text-zinc-500 
  border-t border-zinc-800 bg-zinc-900
  "
    >
      <h3>{props.autor}</h3>
      <h3>{props.criadoEm}</h3>
    </div>
  );
}
