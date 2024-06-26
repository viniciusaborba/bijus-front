"use client";

import { ProductWithTotalPrice } from "@/app/_helpers/product-with-total-price";

import { UserPlus, Pencil, Delete, CircleHelp } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./alert-dialog";
import { useRouter } from "next/navigation";

interface AdminProductMenuProps {
  product: ProductWithTotalPrice;
}

const AdminProductMenu = ({ product }: AdminProductMenuProps) => {
  const router = useRouter();

  const handleCancelAction = () => {
    router.push(`/product/${product.slug}`);
  };

  return (
    <AlertDialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="hover:opacity-70">
            Opções
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Opções de Administrador</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Button variant="secondary" className="hover:opacity-70">
                <Pencil className="mr-2 h-4 w-4" />
                Editar produto
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              {/* delete product */}

              <AlertDialogTrigger>
                <Button variant="secondary" className="hover:opacity-70">
                  <Delete className="mr-2 h-4 w-4" />
                  Deletar produto
                </Button>
              </AlertDialogTrigger>

              {/* delete product */}
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger className="pl-5">
                <CircleHelp className="mr-2 h-4 w-4" />
                <p className="pl-1">Informações do produto</p>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <span>Nome: {product.name}</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Descrição: {product.description}</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Preço: {product.basePrice}</span>
                  </DropdownMenuItem>
                  {product.discountPercentage > 0 && (
                    <DropdownMenuItem>
                      <span>Desconto: {product.discountPercentage}%</span>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
        </DropdownMenuContent>

        <AlertDialogTrigger asChild></AlertDialogTrigger>
        <AlertDialogContent className="w-[90%]">
          <AlertDialogHeader>
            <AlertDialogTitle>
              Deseja mesmo excluir este produto?
            </AlertDialogTitle>
            <AlertDialogDescription>
              Uma vez excluído, não será possível reverter essa ação.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex-row gap-3">
            <AlertDialogCancel
              className="w-full mt-0"
              onClick={handleCancelAction}
            >
              Voltar
            </AlertDialogCancel>
            <AlertDialogAction
              // disabled={isDeleteLoading}
              className="w-full bg-red-500 text-dark hover:bg-red-300"
              // onClick={handleCancelBookingClick}
            >
              {/* {isDeleteLoading && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )} */}
              Confirmar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </DropdownMenu>
    </AlertDialog>
  );
};

export default AdminProductMenu;
