"use server";

import { CartProduct } from "@/app/providers/cart";
import { api } from "@/service/api";

export const createOrder = async (cartProducts: CartProduct[], userId: string) => {
  const order = api.post("/orders", {
    userId,
    products: cartProducts.map((product) => ({
      productId: product.id,
      quantity: product.quantity,
    })),
  });

  return order;
};''
