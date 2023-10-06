import Link from "next/link";

export default function MenuItem(props: any) {
  return (
    <Link
      href={props.url}
      className="
      px-4 py-2
  text-xl w-full rounded-md
  "
    >
      {props.texto}
    </Link>
  );
}
