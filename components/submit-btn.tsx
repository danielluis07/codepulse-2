"use client";

import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export const SubmitBtn = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-11/12 mx-auto bg-[#00aeff] rounded-xl text-white font-bold"
      disabled={pending}>
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Enviar{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
};
