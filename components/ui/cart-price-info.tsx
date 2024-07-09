"use client";

import { useContext } from "react";
import { Separator } from "./separator";
import { Button } from "./button";
import { CartContext } from "@/app/providers/cart";
import { useCookies } from "next-client-cookies";
import { createOrder } from "@/app/(store)/actions/create-order";
import { useRouter } from "next/navigation";

const CartPriceInfo = () => {
  const { products, subTotal, total, totalDiscount } = useContext(CartContext);

  const cookies = useCookies();
  const router = useRouter();

  const handlePurchase = async () => {
    try {
      console.log("handle purchase called");

      const userId = cookies.get("user_id");

      if (!userId) {
        return;
      }

      await createOrder(products, userId!);

      localStorage.removeItem("bijus/cart-products");
      console.log("Cart products removed");

      // Navegar para outra página
      router.push("/catalog");
      console.log("Navigating to catalog");
    } catch (error) {
      console.log("erro");
    }
  };

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

      <Button className="font-bold uppercase mt-7" onClick={handlePurchase}>
        Finalizar compra
      </Button>
    </div>
  );
};

export default CartPriceInfo;
