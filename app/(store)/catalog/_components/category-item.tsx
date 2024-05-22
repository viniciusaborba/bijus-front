import Image from "next/image";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

export const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <div className="flex cursor-pointer flex-col border border-purple-light rounded-lg">
        <div className="flex h-[150px] w-full items-center justify-center rounded-tl-lg rounded-tr-lg">
          <Image
            src={category.imageUrl}
            alt={category.name}
            height={0}
            width={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
            style={{
              objectFit: "fill",
            }}
          />
        </div>

        <div className="rounded-bl-lg rounded-br-lg bg-accent py-3 border border-t-2 bg-purple-dark w-full">
          <p className="text-center text-sm font-semibold hover:opacity-70 text-white">
            {category.name}
          </p>
        </div>
      </div>
    </Link>
  );
};
