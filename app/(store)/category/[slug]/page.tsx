import { CATEGORY_ICON } from "@/app/_constants/category-icon";
import { computeProductTotalPrice } from "@/app/_helpers/product-with-total-price";
import { ProductItem } from "@/components/product-item";
import { Badge } from "@/components/ui/badge";
import { api } from "@/service/api";
import { ProductsComponent } from "../_components/products";

const CategoryProducts = async ({ params }: any) => {
  const { data } = await api.get(`/categories/list/${params.slug}`);

  const category: Category = data.category;

  console.log(category);

  return (
    <div className="flex flex-col p-5 gap-8 w-full border border-purple-light rounded-lg">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase "
        variant="outline"
      >
        {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
        {category!.name}
      </Badge>

      <div className="grid grid-cols-2 gap-8 ">
        {category.products.map((product) => (
          <div className="border border-t-2 ">
            <ProductsComponent
              key={product.id}
              product={computeProductTotalPrice(product)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
