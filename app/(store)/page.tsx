import { Button } from "@/components/ui/button";
import { api } from "@/service/api";
import { useEffect, useState } from "react";
import WelcomeMessage from "./_components/welcome-message";
import { Categories } from "./_components/categories";
import { SectionTitle } from "@/components/section-title";
import { ProductList } from "@/components/product-list";

interface GetUserResponse {
  user: User;
}

// async function getUser(userId: string) {
//   const result = await api.get<GetUserResponse>(`/users/${userId}`);

//   return result.data;
// }
export default async function Home() {
  // const [token, setToken] = useState("");
  // useEffect(() => {
  //   const storedToken = localStorage.getItem("@bijus:token");
  //   if (storedToken) {
  //     setToken(storedToken);
  //   }
  // }, []);

  return (
    <div className="flex flex-col gap-8 py-8 w-screen">
      <WelcomeMessage />

      <div className="px-5">
        <Categories />
      </div>

      <div>
        <SectionTitle>Colares</SectionTitle>
        <ProductList slug="colares" />
      </div>
    </div>
  );
}
