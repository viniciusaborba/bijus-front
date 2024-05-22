interface User {
  id: string;
  name: string;
  cellphoneNumber: string;
  cpf: string;
  email: string;
  address: string;
  password: string;
  role: "ADMIN" | "USER";
}

interface Category {
  id: string;
  name: string;
  imageUrl: string;
  slug: string;
  products: Product[]
}

interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  basePrice: number;
  imageUrls: string[];
  categoryId: string;
  discountPercentage: number;
}
