"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import hero from "@/public/hero.png";

export const Hero = () => {
  return (
    <motion.div
      className="background-gradient mt-[80px] p-10 sm:py-20 sm:px-36"
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
      <div className="flex flex-col gap-y-20 md:flex-row items-center justify-between">
        {/* title */}
        <div className="basis-full text-white space-y-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Somos uma Agência que Cria Sites e Estratégias de Marketing para
            Pequenos Negócios Atraírem Mais Clientes e Aumentarem Suas Vendas
          </h1>
          <h2>
            Impulsionamos Pequenos Negócios com Estratégias que Geram Resultados
            Reais. Sites que Engajam e Marketing que Gera Resultados, Feitos
            para o Sucesso de sua empresa.
          </h2>
          <button className="py-3 px-5 rounded-xl bg-[#2dde98]">
            Entre em contato
          </button>
        </div>
        {/* image */}
        <div className="basis-full maxlg:hidden">
          <div className="relative size-96 mx-auto">
            <Image src={hero} alt="hero" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
