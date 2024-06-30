"use server";

import { computeProductTotalPrice } from "@/app/_helpers/product-with-total-price";
import { ProductItem } from "./product-item";
import { api } from "@/service/api";
interface ProductListProps {
  slug: string;
}

export const ProductList = async ({ slug }: ProductListProps) => {
  const { data } = await api.get(`/products/list-by-slug/${slug}`);

  const products: Product[] = data.products;

  return (
    <div className="flex w-full cursor-pointer gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <div className="w-[156px] max-w-[170px]" key={product.id}>
          <ProductItem product={computeProductTotalPrice(product)} />
        </div>
      ))}
    </div>
  );
};
