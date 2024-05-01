"use client";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const WelcomeMessage = () => {
  return (
    <div className="px-5 pt-5 ">
      <h2 className="text-xl font-bold">
        Realize o cadastro para utilizar o app!
      </h2>
    </div>
  );
};

export default WelcomeMessage;
