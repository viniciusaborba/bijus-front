"use client";

import {
  HomeIcon,
  ListOrderedIcon,
  MenuIcon,
  PercentIcon,
  ShoppingCartIcon,
  LogInIcon,
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
// import Cart from "./cart";

export const Header = () => {
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
                >
                  <LogInIcon size={16} />
                  Fazer login
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
