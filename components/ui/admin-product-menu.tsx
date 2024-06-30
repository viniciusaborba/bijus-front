"use client";

import { ProductWithTotalPrice } from "@/app/_helpers/product-with-total-price";

import { Pencil, Delete, CircleHelp } from "lucide-react";

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
import { api } from "@/service/api";
import { useToast } from "./use-toast";
import { useCookies } from "next-client-cookies";

interface AdminProductMenuProps {
  product: ProductWithTotalPrice;
}

const AdminProductMenu = ({ product }: AdminProductMenuProps) => {
  const router = useRouter();

  const cookies = useCookies();

  const token = cookies.get("bijus-token");

  const { toast } = useToast();

  const handleDeleteProduct = async () => {
    await api.delete(`/products/${product.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    toast({
      title: "Sucesso!",
      description: "Produto excluído com sucesso!",
    });

    router.refresh();
  };

  const handleCancelAction = () => {
    router.refresh();
  };

  return (
    <AlertDialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="bg-purple-dark hover:bg-purple text-white"
          >
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
              className="w-full mt-0 hover:opacity-50"
              onClick={handleCancelAction}
            >
              Voltar
            </AlertDialogCancel>
            <AlertDialogAction
              // disabled={isDeleteLoading}
              className="w-full bg-red-500 text-dark hover:bg-red-300"
              onClick={handleDeleteProduct}
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
