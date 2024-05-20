import { CATEGORY_ICON } from "@/app/_constants/category-icon";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

export const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <Badge
        variant="outline"
        className="flex cursor-pointer items-center justify-center gap-2 rounded-lg py-3 hover:opacity-50 "
      >
        {CATEGORY_ICON[category.slug as keyof typeof CATEGORY_ICON]}
        <span className="text-xs font-bold">{category.name}</span>
      </Badge>
    </Link>
  );
};