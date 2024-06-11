"use client";

import {
  HomeIcon,
  ListOrderedIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
  LogOutIcon,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "./sheet";
import Link from "next/link";
import Cart from "./cart";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { CartContext } from "@/app/providers/cart";

export const Header = () => {
  const cookies = useCookies();
  const router = useRouter();

  const handleLogOut = () => {
    cookies.remove("bijus-token");

    router.refresh();
  };

  const { products } = useContext(CartContext)

  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="flex flex-col justify-between">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>

          <div className="mt-4 flex flex-col gap-2 flex-1">
            <SheetClose asChild>
              <Link href={"/"}>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <HomeIcon size={16} />
                  Início
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href={"/test"}>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <PercentIcon size={16} />
                  Ofertas
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href={"/catalog"}>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <ListOrderedIcon size={16} />
                  Catálogo
                </Button>
              </Link>
            </SheetClose>
          </div>

          <SheetFooter>
            <SheetClose asChild>
              <Link href={"/sign-in"}>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                  onClick={handleLogOut}
                >
                  <LogOutIcon size={16} />
                  Sair
                </Button>
              </Link>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <h1 className="text-lg font-semibold">
        <Link href={"/"}>
          <span className="text-primary">Bijus</span>
        </Link>
      </h1>

      <Sheet>
      <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="relative">
            {products.length > 0 && (
              <span className="absolute -right-3 -top-2 rounded-full bg-purple-dark px-1.5 text-white">
                {products.length}
              </span>
            )}
            <ShoppingCartIcon />
          </Button>
        </SheetTrigger>

        <SheetContent className="w-[350px]">
          <Cart />
        </SheetContent>
      </Sheet>
    </Card>
  );
};
