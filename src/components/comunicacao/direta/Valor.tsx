interface ValorProps {
  texto: string;
}

export default function Valor(props: ValorProps) {
  return (
    <div className="text-8xl font-black bg-yellow-800 rounded-md p-5">
      {props.texto}
    </div>
  );
}
