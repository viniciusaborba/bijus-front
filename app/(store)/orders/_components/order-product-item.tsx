import Image from "next/image";
import colar from "@/public/colar.jpg";

const OrderProductItem = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-[77px] w-[100px] items-center justify-center rounded-lg bg-accent">
        <Image
          src={colar}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[80%] w-auto max-w-[80%] object-contain"
          alt="colar"
        />
      </div>

      <div className="flex flex-col gap-1 w-full">
        <div className="flex rounded-md bg-accent px-3 py-1 w-fit">
          <p className="text-[12px]">
            Vendido e entregue por <span className="font-bold">Bijus</span>
          </p>
        </div>
        <p className="text-xs">Colar de Ouro</p>

        <div className="flex w-full items-center justify-between gap-1">
          <div className="flex items-center gap-1">
            <p className="text-sm font-bold">R$ 200,00</p>
          </div>

          <p className="ext-xs opacity-60">Qtd: 1</p>
        </div>
      </div>
    </div>
  );
};

export default OrderProductItem;
