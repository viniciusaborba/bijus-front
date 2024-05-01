"use client";

import { ShoppingCartIcon } from "lucide-react";
import { Badge } from "./badge";
// import { computeProductTotalPrice } from "@/helpers/product";
import { ScrollArea } from "./scroll-area";

const Cart = () => {
  return (
    <div className="flex h-full flex-col gap-8">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      <div className="flex h-full flex-col gap-5 max-h-full overflow-hidden">
        <ScrollArea className="h-full">
          {/* <div className="flex h-full flex-col gap-5">
            {products.length > 0 ? (
              products.map((product) => (
                <>
                  <CartItem
                    product={computeProductTotalPrice(product as any) as any}
                    key={product.id}
                  />
                </>
              ))
            ) : (
              <p className="text-center font-semibold">
                Você ainda não adicionou items ao carrinho!
              </p>
            )}
          </div> */}

          <div className="flex h-full flex-col gap-5">
            <p className="text-center font-semibold">
              Você ainda não adicionou items ao carrinho!
            </p>
          </div>
        </ScrollArea>
      </div>

      {/* {products.length > 0 && (
        <CartPriceInfo />
      )} */}
    </div>
  );
};

export default Cart;
