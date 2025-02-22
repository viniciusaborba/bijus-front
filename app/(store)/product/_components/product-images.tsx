"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  name: string;
  imageUrls: string[];
}

const ProductImages = ({ imageUrls, name }: ProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState(imageUrls[0]);

  const handleImageChange = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  };

  return (
    <div className="flex flex-col">
      <div className="flex h-[380px] w-full items-center justify-center bg-accent">
        <Image
          src={currentImage}
          alt={name}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
        />
      </div>

      <Separator />

      <div className="mt-8 grid grid-cols-4 gap-4 px-5 ">
        {imageUrls.map((imageUrl) => (
          <button
            key={imageUrl}
            className={`flex h-[6.25rem] items-center justify-center rounded-lg bg-accent hover:opacity-75 border border-purple-light
              ${
                imageUrl === currentImage &&
                "border-2 border-solid border-purple-dark"
              }
              `}
            onClick={() => handleImageChange(imageUrl)}
          >
            <Image
              src={imageUrl}
              alt={name}
              width={0}
              height={0}
              sizes="100vw"
              className="h-auto max-h-[70%] w-auto max-w-[80%]"
              style={{
                objectFit: "contain",
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
