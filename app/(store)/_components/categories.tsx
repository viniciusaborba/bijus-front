'use server'

import { api } from "@/service/api";
import { CategoryItem } from "./category-item";

export const Categories = async () => {
  const { data } = await api.get("/categories/list");

  const categories: Category[] = data.categories;

  return (
    <div className="grid grid-cols-2 gap-y-2 gap-x-4">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};
