"use server";

import { computeProductTotalPrice } from "@/app/_helpers/product-with-total-price";
import { ProductItem } from "./product-item";
import { api } from "@/service/api";

export const ProductList = async () => {
  const { data } = await api.get("/products/list-by-slug");

  const necklaces: Product[] = data.necklaces;

  return (
    <div className="flex w-full cursor-pointer gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {necklaces.map((product) => (
        <div className="w-[156px] max-w-[170px]" key={product.id}>
          <ProductItem product={computeProductTotalPrice(product)} />
        </div>
      ))}
    </div>
  );
};
