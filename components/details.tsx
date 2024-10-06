"use client";

import { motion } from "framer-motion";
import computer from "@/public/computer.png";
import Image from "next/image";

export const Details = () => {
  return (
    <motion.section
      className="flex flex-col xl:flex-row xl:gap-x-5 w-full mt-36"
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
      <div className="basis-full space-y-4">
        <h1 className="text-3xl font-bold gradient-text mb-10">
          Impulsione o Sucesso do Seu Negócio na Era Digital
        </h1>
        <p>
          Na Codepulse, somos mais do que uma agência de marketing digital –
          somos parceiros dedicados ao crescimento do seu negócio. Nossa missão
          é ajudar pequenas empresas a se destacarem em um mercado cada vez mais
          competitivo e digital.
        </p>
        <p>
          Valorizamos as conexões genuínas. Começamos cada projeto entendendo
          profundamente as necessidades do seu negócio, para criar estratégias
          que realmente refletem a sua marca e conquistam seus clientes. Sabemos
          que cada empresa tem desafios únicos e, por isso, criamos estratégias
          de marketing personalizadas para impulsionar suas vendas e alcançar
          seus objetivos
        </p>
        <p>
          Não importa se você precisa de um site profissional, aumentar sua
          presença nas redes sociais ou atrair mais clientes para o seu negócio.
          Estamos aqui para simplificar o marketing digital e trazer resultados
          concretos para a sua empresa, sem complicações
        </p>
      </div>
      {/* image */}
      <div className="basis-full">
        <div className="relative size-80 sm:size-96 md:size-[450px] 2xl:size-[550px] mx-auto xl:ml-auto rounded-lg overflow-hidden">
          <Image src={computer} alt="computer" fill />
        </div>
      </div>
    </motion.section>
  );
};
