import Image from "next/image";
import Link from "next/link";
import DiscountBadge from "./discount-badge";
import { ProductWithTotalPrice } from "@/app/_helpers/product-with-total-price";
import { getUserRole } from "@/app/(store)/actions/get-user-role";

import AdminProductMenu from "./ui/admin-product-menu";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

export const ProductItem = async ({ product }: ProductItemProps) => {
  const userRole = await getUserRole();

  return (
    <>
      {userRole === "ADMIN" ? (
        <>
          <div className="flex cursor-pointer flex-col gap-4">
            <div className="relative flex h-[170px] w-full items-center justify-center rounded-lg bg-accent hover:opacity-70 pl-5">
              <Image
                src={product.imageUrls[0]}
                height={0}
                width={0}
                sizes="100vw"
                className="h-auto max-h-[70%] w-auto max-w-[80%] rounded-sm"
                alt={product.name}
                style={{
                  objectFit: "contain",
                }}
              />
            </div>

            <div className="pl-5 flex items-center justify-center">
              <AdminProductMenu product={product} />
              {/* <AdminProductMenuSelect product={product} /> */}
            </div>
          </div>
        </>
      ) : (
        <Link href={`/product/${product.slug}`}>
          <div className="flex cursor-pointer flex-col gap-4">
            <div className="relative flex h-[170px] w-full items-center justify-center rounded-lg bg-accent hover:opacity-70">
              <Image
                src={product.imageUrls[0]}
                height={0}
                width={0}
                sizes="100vw"
                className="h-auto max-h-[70%] w-auto max-w-[80%] rounded-sm"
                alt={product.name}
                style={{
                  objectFit: "contain",
                }}
              />

              {product.discountPercentage > 0 && (
                <DiscountBadge className="absolute left-3 top-3">
                  {product.discountPercentage}
                </DiscountBadge>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm">
                {product.name}
              </p>

              <div className="flex w-full items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
                {product.discountPercentage > 0 ? (
                  <>
                    <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap font-semibold">
                      R$ {product.totalPrice.toFixed(2).replace(".", ",")}
                    </p>

                    <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-xs line-through opacity-75">
                      R${" "}
                      {Number(product.basePrice).toFixed(2).replace(".", ",")}
                    </p>
                  </>
                ) : (
                  <p className="text-sm font-semibold">
                    R$ {product.basePrice.toFixed(2).replace(".", ",")}
                  </p>
                )}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};
