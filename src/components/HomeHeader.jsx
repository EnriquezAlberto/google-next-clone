import Link from "next/link";
import { TbGridDots } from "react-icons/tb";
export default function Home() {
  return (
    <header className="flex justify-end p-5 text-small">
      <div className="flex space-x-4 items-center">
        <Link href={"https://mail.google.com/"} className="hover:underline ">
          Gmail
        </Link>
        <Link href={"https://www.google.com/imghp?hl=es&ogbl"}>Imágenes</Link>
        <TbGridDots className="bg-transparent hover:bg-ray-200 rounded-full text-4xl p-2" />
        <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-shadow">
          Sign in
        </button>
      </div>
    </header>
  );
}
