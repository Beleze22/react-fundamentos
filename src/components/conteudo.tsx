export default function Conteudo(props: any) {
  console.log(props);
  return (
    <div
      className="
  flex justify-center items-center flex-1
  text-3xl rounded-lg
  bg-emerald-500
  "
    >
      {props.children}
    </div>
  );
}
