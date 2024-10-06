"use client";

import { IoBarChartOutline } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { SlSocialInstagram } from "react-icons/sl";
import { MdOutlineQueryStats } from "react-icons/md";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { RiUserStarLine } from "react-icons/ri";
import { PiUsersThree } from "react-icons/pi";
import { motion } from "framer-motion";

type CardsData = {
  id: number;
  background: string;
  icon: JSX.Element;
  title: string;
  description: string;
};

export const data: CardsData[] = [
  {
    id: 1,
    background: "#3369e7",
    icon: <PiUsersThree className="text-5xl text-white" />,
    title: "Atração de Clientes e Geração de Leads Qualificados",
    description:
      "Atraímos clientes interessados no seu negócio através de estratégias personalizadas para aumentar suas oportunidades de vendas",
  },
  {
    id: 2,
    background: "#00aeff",
    icon: <HiOutlineDesktopComputer className="text-5xl text-white" />,
    title: "Criação de Sites",
    description:
      "Desenvolvemos sites modernos e funcionais, focados em oferecer uma experiência de usuário incrível e converter visitantes em clientes",
  },
  {
    id: 3,
    background: "#2dde98",
    icon: <IoBarChartOutline className="text-5xl text-white" />,
    title: "Otimização de Site (SEO)",
    description:
      "Melhoramos o posicionamento do seu site nos resultados de busca do Google, aumentando a visibilidade e o tráfego orgânico",
  },
  {
    id: 4,
    background: "#3369e7",
    icon: <MdOutlineMarkEmailRead className="text-5xl text-white" />,
    title: "Email Marketing",
    description:
      "Criamos campanhas de email que engajam seu público, fidelizam clientes e impulsionam as vendas",
  },
  {
    id: 5,
    background: "#00aeff",
    icon: <LiaChalkboardTeacherSolid className="text-5xl text-white" />,
    title: "Consultoria de Marketing",
    description:
      "Analisamos seu negócio e desenvolvemos estratégias eficazes para alcançar seus objetivos e aumentar seus resultados",
  },
  {
    id: 6,
    background: "#2dde98",
    icon: <SlSocialInstagram className="text-5xl text-white" />,
    title: "Gerenciamento de Redes Sociais",
    description:
      "Gerenciamos suas redes sociais com conteúdos criativos e estratégias para aumentar o engajamento e atrair mais seguidores",
  },
  {
    id: 7,
    background: "#3369e7",
    icon: <IoBarChartOutline className="text-5xl text-white" />,
    title: "Anúncios Pagos (Google e Meta)",
    description:
      "Criamos e gerenciamos campanhas de anúncios no Google, Facebook e Instagram para aumentar a visibilidade e as vendas do seu negócio",
  },
  {
    id: 8,
    background: "#00aeff",
    icon: <MdOutlineQueryStats className="text-5xl text-white" />,
    title: "Análise de Dados e Relatórios",
    description:
      "Monitoramos o desempenho das suas campanhas e geramos relatórios claros e detalhados, ajudando você a entender os resultados e tomar decisões estratégicas para o crescimento do seu negócio",
  },
  {
    id: 9,
    background: "#2dde98",
    icon: <RiUserStarLine className="text-5xl text-white" />,
    title: "Gestão de Reputação Online",
    description:
      "Acompanhamos e respondemos a avaliações e comentários sobre seu negócio em plataformas online, ajudando a manter uma imagem positiva e fortalecendo a confiança dos seus clientes",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};

export const Cards = () => {
  return (
    <div className="w-full mt-36">
      <h1 className="text-3xl font-bold gradient-text text-center">
        Nossos Serviços
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-24">
        {data.map((card, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="shadow-xl p-5 space-y-4">
            <div className="flex justify-center">
              <div
                style={{ backgroundColor: card.background }}
                className="p-5 rounded-full">
                {card.icon}
              </div>
            </div>
            <h1 className="text-center text-xl font-bold">{card.title}</h1>
            <h2 className="text-center">{card.description}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
