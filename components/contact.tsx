"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/hooks";
import { sendEmail } from "@/actions/send-email";
import { SubmitBtn } from "@/components/submit-btn";
import toast from "react-hot-toast";

export const Contact = () => {
  const { ref } = useSectionInView("Contato");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center z-10 mx-auto mt-36"
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
      <h1 className="text-3xl font-bold gradient-text">Entre em contato</h1>

      <p>
        Favor entrar em contato diretamente em <a>daniel.luis@unidavi.edu.br</a>{" "}
        ou pelo formulário abaixo.
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email enviado com sucesso!");
        }}>
        <input
          className="h-14 px-4 rounded-lg transition-all border border-[#00aeff] outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Seu email"
        />
        <textarea
          className="h-52 my-3 rounded-lg p-3 transition-all border border-[#00aeff] outline-none"
          name="message"
          placeholder="Sua mensagem"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};
