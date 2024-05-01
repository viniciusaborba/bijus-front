"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/service/api";
import { useEffect, useState } from "react";
import WelcomeMessage from "./_components/welcome-message";

interface GetUserResponse {
  user: User;
}

// async function getUser(userId: string) {
//   const result = await api.get<GetUserResponse>(`/users/${userId}`);

//   return result.data;
// }
export default function Home() {
  // const [token, setToken] = useState("");
  // useEffect(() => {
  //   const storedToken = localStorage.getItem("@bijus:token");
  //   if (storedToken) {
  //     setToken(storedToken);
  //   }
  // }, []);

  return (
    <div>
      <WelcomeMessage />
    </div>
  )
}
