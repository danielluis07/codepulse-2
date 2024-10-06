import Link from "next/link";
import { links } from "@/utils/data";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <h2 className="text-lg font-semibold">CodePulse</h2>
        <p className="mt-2">Construção de Websites Personalizados</p>
        <div className="mt-4 space-x-8">
          {links.map((link, index) => (
            <Link className="hover:text-[#2dde98]" key={index} href={link.hash}>
              {link.name}
            </Link>
          ))}
        </div>
        <p className="mt-6 text-gray-400">
          &copy; 2024 CodePulse. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
