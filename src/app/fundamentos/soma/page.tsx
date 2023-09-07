export default function Page() {
  const nome = "João";
  const idade = 40;

  return (
    <div>
      <div>
        nome {nome} idade {idade}
      </div>
      <div>2 + 7 = {2 + 7}</div>
      <div>idade * 3 = {idade * 3}</div>
      <div>Math.random() = {Math.random()}</div>
    </div>
  );
}
