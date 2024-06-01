import { computeProductTotalPrice } from "@/app/_helpers/product-with-total-price";
import ProductImages from "../_components/product-images";
import ProductInfo from "../_components/product-info";
import { SectionTitle } from "@/components/section-title";
import { api } from "@/service/api";

interface ProductDetailsProps {
  params: {
    slug: string;
  };
}

const ProductDetails = async ({ params: { slug } }: ProductDetailsProps) => {
  const { data } = await api.get(`/products/${slug}`);

  const product: Product = data.product;

  if (!product) {
    return null;
  }

  return (
    <div className="flex flex-col gap-8 pb-8 w-full">
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
      <ProductInfo product={computeProductTotalPrice(product)} />

      <div>
        <SectionTitle>Produtos recomendados</SectionTitle>
        {/* <ProductList products={product.category.products} /> */}
      </div>
    </div>
  );
};

export default ProductDetails;
