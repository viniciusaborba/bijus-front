"use client";

import { useContext } from "react";
import { Separator } from "./separator";
import { Button } from "./button";
// import { createCheckout } from "@/actions/checkout";
// import { loadStripe } from "@stripe/stripe-js"
// import { useSession } from "next-auth/react";
// import { createOrder } from "@/actions/order";
import { CartContext } from "@/app/providers/cart";

const CartPriceInfo = () => {
  const { products, subTotal, total, totalDiscount } = useContext(CartContext);

  //   const handlePurchase = async () => {
  //     if (!data?.user) {
  //       return;
  //     }

  //     const order = await createOrder(products, (data!.user as any).id);

  //     const checkout = await createCheckout(products, order.id);

  //     const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

  //     stripe?.redirectToCheckout({
  //       sessionId: checkout.id,
  //     });

  return (
    <div className="flex flex-col gap-3">
      <Separator />

      <div className="flex items-center justify-between text-xs">
        <p>Subtotal</p>
        <p>R$ {subTotal.toFixed(2)}</p>
      </div>

      <Separator />

      <div className="flex items-center justify-between text-xs">
        <p>Entrega</p>
        <p className="uppercase">grátis</p>
      </div>

      <Separator />

      <div className="flex items-center justify-between text-xs">
        <p>Descontos</p>
        <p>- R${totalDiscount.toFixed(2)}</p>
      </div>

      <Separator />

      <div className="flex items-center justify-between text-xs font-bold">
        <p>Total</p>
        <p>R${total.toFixed(2)}</p>
      </div>

      <Button className="font-bold uppercase mt-7">Finalizar compra</Button>
    </div>
  );
};

export default CartPriceInfo;
