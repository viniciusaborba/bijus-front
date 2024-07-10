"use client";

import { Separator } from "@/components/ui/separator";

const ProductTotalInfo = () => {
  return (
    <div className="flex flex-col gap-1 text-sm">
      <Separator />

      <div className="flex w-full justify-between py-3">
        <p>Subtotal</p>
        <p>R$ 200,00</p>
      </div>

      <Separator />

      <div className="flex w-full justify-between py-3">
        <p>Entrega</p>
        <p>Grátis</p>
      </div>

      <Separator />

      <div className="flex w-full justify-between py-3">
        <p>Descontos</p>
        <p>- R$ 0,00</p>
      </div>

      <Separator />

      <div className="text-md flex w-full justify-between py-3 font-bold">
        <p>Total</p>
        <p>R$ 200,00</p>
      </div>
    </div>
  );
};

export default ProductTotalInfo;
