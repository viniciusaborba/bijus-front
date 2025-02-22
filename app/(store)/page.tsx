import { api } from "@/service/api";
import WelcomeMessage from "./_components/welcome-message";
import { Categories } from "./_components/categories";
import { SectionTitle } from "@/components/section-title";
import { ProductList } from "@/components/product-list";
import { ProductListArray } from "@/components/product-list-array";
import { getUserRole } from "./actions/get-user-role";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

  const userRole = await getUserRole();

  const { data } = await api.get("/products/offers");

  const offers: Product[] = data.offers;

  return (
    <div className="flex flex-col gap-8 py-8 w-screen px-5">
      <WelcomeMessage />

      {userRole === "ADMIN" && (
        <div className="px-5">
          <Link href="/register-product">
            <Button className="flex flex-start bg-purple-dark hover:bg-purple">
              Adicionar produto
            </Button>
          </Link>
        </div>
      )}

      {userRole === "USER" && (
        <div className="px-5">
          <Categories />
        </div>
      )}

      {offers.length > 0 && (
        <div>
          <SectionTitle>Ofertas</SectionTitle>
          <ProductListArray products={offers} />
        </div>
      )}

      <div>
        <SectionTitle>Colares</SectionTitle>
        <ProductList slug="colares" />
      </div>
    </div>
  );
}
