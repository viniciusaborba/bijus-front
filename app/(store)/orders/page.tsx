import { Badge } from "@/components/ui/badge";
import { ShoppingBasket } from "lucide-react";
import OrderItem from "./_components/order-item";

const Orders = async () => {
  return (
    <div className="p-5 w-full">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <ShoppingBasket size={16} />
        Meus pedidos
      </Badge>

      <div className="mt-8 flex flex-col gap-5">
        <OrderItem />
      </div>
    </div>
  );
};

export default Orders;
