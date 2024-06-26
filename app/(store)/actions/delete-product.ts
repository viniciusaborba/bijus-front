"use server";

import { api } from "@/service/api";

interface DeleteProductActionProps {
  productId: string;
}

export const DeleteProductAction = async ({
  productId,
}: DeleteProductActionProps) => {
  await api.delete(`/products/${productId}`);

  return;
};
