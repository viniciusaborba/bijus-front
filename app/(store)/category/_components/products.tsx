import Image from "next/image";
import Link from "next/link";
import { ProductWithTotalPrice } from "@/app/_helpers/product-with-total-price";
import DiscountBadge from "@/components/discount-badge";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

export const ProductsComponent = ({ product }: ProductItemProps) => {
  return (
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
            <DiscountBadge className="absolute left-3 top-3 bg-purple-dark">
              {product.discountPercentage}
            </DiscountBadge>
          )}
        </div>

        <div className="flex flex-col gap-1 bg-purple-dark w-full rounded-sm p-3">
          <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-sm text-base-button ">
            {product.name}
          </p>

          <div className="flex w-full items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            {product.discountPercentage > 0 ? (
              <>
                <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-base-button">
                  R$ {product.totalPrice.toFixed(2).replace(".", ",")}
                </p>

                <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-xs line-through opacity-75 text-base-button">
                  R$ {Number(product.basePrice).toFixed(2).replace(".", ",")}
                </p>
              </>
            ) : (
              <p className="text-sm font-semibold text-base-button">
                R$ {product.basePrice.toFixed(2).replace(".", ",")}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
