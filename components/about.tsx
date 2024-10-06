"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import team from "@/public/team.jpg";
export const About = () => {
  return (
    <motion.section
      id="about"
      className="flex flex-col gap-y-14 xl:flex-row xl:gap-x-5 w-full mt-36"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}>
      {/* image */}
      <div className="basis-full maxxl:order-last">
        <div className="relative w-80 h-72 sm:w-[500px] sm:h-96 rounded-lg overflow-hidden maxxl:mx-auto">
          <Image src={team} alt="team" fill />
        </div>
      </div>
      <div className="basis-full space-y-4 maxxl:order-first">
        <h1 className="text-3xl font-bold gradient-text">Quem somos</h1>
        <p>
          Na Codepulse, somos uma agência de marketing e criação de sites
          voltada para pequenos negócios. Nosso foco é ajudar empresas a
          alcançarem seus objetivos através de estratégias eficazes e
          personalizadas. Entendemos os desafios que pequenas empresas enfrentam
          e estamos aqui para apoiar o crescimento de cada uma, oferecendo
          soluções acessíveis e eficientes. Nossa missão é impulsionar o sucesso
          dos nossos clientes, sempre com proximidade e compromisso.
        </p>
      </div>
    </motion.section>
  );
};
