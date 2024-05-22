import { Badge } from "@/components/ui/badge";
import { api } from "@/service/api";
import { ShapesIcon } from "lucide-react";
import { CategoryItem } from "./_components/category-item";

export default async function Catalog() {
  const { data } = await api.get("/categories/list");

  const categories: Category[] = data.categories;

  return (
    <div className="flex flex-col gap-8 p-5 w-full">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <ShapesIcon size={16} />
        Catálogo
      </Badge>
      <div className="grid grid-cols-2 gap-8 border">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
