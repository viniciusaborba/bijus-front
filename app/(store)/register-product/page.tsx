import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";
import RegisterProductForm from "./_components/register-product-form";
import { api } from "@/service/api";

const fetchCategories = async () => {
  const response = await api.get("/categories/list");

  return response.data.categories;
};

const RegisterProduct = async () => {
  const categories = await fetchCategories();

  return (
    <div className="flex flex-col gap-8 py-8 px-5 w-screen">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <Plus size={16} />
        Adicionar Produto
      </Badge>

      <RegisterProductForm categories={categories} />
    </div>
  );
};

export default RegisterProduct;
