"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import hero from "@/public/hero.png";
import Link from "next/link";

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
            Estratégias de marketing para pequenos negócios atraírem mais
            clientes e aumentarem as vendas
          </h1>
          <h2 className="pb-3">
            Impulsionamos pequenos negócios com estratégias que geram resultados
            reais. Criamos sites envolventes e campanhas de marketing que
            impulsionam o crescimento da sua empresa, focados no sucesso do seu
            negócio.
          </h2>
          <Link href="#contact">
            <button
              id="contact_button"
              className="py-3 px-5 rounded-xl bg-[#2dde98]">
              Entre em contato
            </button>
          </Link>
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
