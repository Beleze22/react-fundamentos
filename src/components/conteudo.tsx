export default function Conteudo(props: any) {
  return (
    <div
      className="
  flex px-10 py-4 flex-1 items-start
  text-3xl
  bg-zinc-900
  "
    >
      {props.children}
    </div>
  );
}
