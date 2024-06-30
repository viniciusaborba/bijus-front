import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";

const RegisterProduct = () => {
  return (
    <div className="flex flex-col gap-8 py-8 px-5 w-screen">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <Plus size={16} />
        Adicionar Produto
      </Badge>
    </div>
  );
};

export default RegisterProduct;
