"use client";

import { Card } from "@/components/ui/card";
import ProductTotalInfo from "./product-total-info";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const OrderItem = () => {
  return (
    <Card className="px-5">
      <Accordion type="single" className="w-full" collapsible>
        <AccordionItem value="1">
          <AccordionTrigger>
            <div className="flex flex-col gap-1 text-left">
              <p className="uppercase font-bold text-sm">
                Pedido com 1 produto(s)
              </p>
              <span className="text-xs opacity-60">
                Feito em 09/07/2024 às 20h37min
              </span>
            </div>
          </AccordionTrigger>

          <AccordionContent>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="font-bold">
                  <p>Status</p>
                  <p className="text-[#8162FF]">Aguardando Pagamento</p>
                </div>

                <div className="">
                  <p className="font-bold">Data</p>
                  <p className="opacity-60">09/07/2024 às 20h37min</p>
                </div>

                <div className="">
                  <p className="font-bold">Pagamento</p>
                  <p className="opacity-60">Cartão</p>
                </div>
              </div>

              <ProductTotalInfo />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default OrderItem;
