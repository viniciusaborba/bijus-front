"use client";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useCookies } from "next-client-cookies";

const WelcomeMessage = () => {
  const cookies = useCookies();
  const name = cookies.get("user_name");
  return (
    <div className="px-5 pt-5 ">
      <h2 className="text-xl font-bold">{`Bem vindo(a) ao Bijus, ${name}!`}</h2>
    </div>
  );
};

export default WelcomeMessage;
