"use client";

import { ReactNode, createContext, useEffect, useMemo, useState } from "react";
import { ProductWithTotalPrice } from "../_helpers/product-with-total-price";

export interface CartProduct extends ProductWithTotalPrice {
  quantity: number;
}

interface ICartContext {
  products: CartProduct[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
  total: number;
  subTotal: number;
  totalDiscount: number;
  addProductToCart: (product: CartProduct) => void;
  decreaseProductQuantity: (productId: string) => void;
  increaseProductQuantity: (productId: string) => void;
  removeProductFromCart: (productId: string) => void;
}

export const CartContext = createContext<ICartContext>({
  products: [],
  cartTotalPrice: 0,
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  total: 0,
  subTotal: 0,
  totalDiscount: 0,
  addProductToCart: () => {},
  decreaseProductQuantity: () => {},
  increaseProductQuantity: () => {},
  removeProductFromCart: () => {},
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);

  useEffect(() => {
    setProducts(
      JSON.parse(localStorage.getItem("bijus/cart-products") || "[]")
    );
  }, []);

  // Without discount
  const subTotal = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + Number(product.basePrice) * product.quantity;
    }, 0);
  }, [products]);

  // with discount
  const total = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + product.totalPrice * product.quantity;
    }, 0);
  }, [products]);

  const totalDiscount = subTotal - total;

  const addProductToCart = (product: CartProduct) => {
    const productIsAlreadyOnCart = products.some(
      (cartProduct) => cartProduct.id === product.id
    );

    if (productIsAlreadyOnCart) {
      const updatedProducts = products.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + product.quantity,
          };
        }

        return item;
      });

      setProducts(updatedProducts);

      localStorage.setItem(
        "bijus/cart-products",
        JSON.stringify(updatedProducts)
      );

      return;
    }

    setProducts((prev) => [...prev, product]);
    localStorage.setItem(
      "bijus/cart-products",
      JSON.stringify([...products, product])
    );
  };

  const decreaseProductQuantity = (productId: string) => {
    setProducts((prev) =>
      prev
        .map((cartProduct) => {
          if (cartProduct.id === productId) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity - 1,
            };
          }

          return cartProduct;
        })
        .filter((cartProduct) => cartProduct.quantity > 0)
    );
  };

  const increaseProductQuantity = (productId: string) => {
    setProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id === productId) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          };
        }

        return cartProduct;
      })
    );
  };

  const removeProductFromCart = (productId: string) => {
    setProducts((prev) => {
      const updatedProducts = prev.filter(
        (cartProduct) => cartProduct.id !== productId
      );

      localStorage.setItem(
        "bijus/cart-products",
        JSON.stringify(updatedProducts)
      );

      return updatedProducts;
    });
  };

  return (
    <CartContext.Provider
      value={{
        products,
        cartTotalPrice: 0,
        cartBasePrice: 0,
        cartTotalDiscount: 0,
        total,
        subTotal,
        totalDiscount,
        addProductToCart,
        decreaseProductQuantity,
        increaseProductQuantity,
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
