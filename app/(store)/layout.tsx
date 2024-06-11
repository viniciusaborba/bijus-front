import { Footer } from "@/components/footer";
import { Header } from "@/components/ui/header";
import { PropsWithChildren } from "react";
import CartProvider from "../providers/cart";
import { Toaster } from "@/components/ui/toaster";

export default function StoreLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-w-screen min-h-screen flex flex-col justify-between">
      <CartProvider>
        <Header />

        <div className="flex flex-1">{children}</div>
        <Toaster />

        <Footer />
      </CartProvider>
    </div>
  );
}
