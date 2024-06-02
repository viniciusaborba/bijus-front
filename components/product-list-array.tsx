"use server";

import { computeProductTotalPrice } from "@/app/_helpers/product-with-total-price";
import { ProductItem } from "./product-item";

interface ProductListProps {
  products: Product[];
}

export const ProductListArray = async ({ products }: ProductListProps) => {
  return (
    <div className="flex w-full cursor-pointer gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <div className="w-[156px] max-w-[170px]" key={product.id}>
          <ProductItem product={computeProductTotalPrice(product)} />
        </div>
      ))}
    </div>
  );
};
