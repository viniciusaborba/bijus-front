import { Footer } from "@/components/footer";
import { Header } from "@/components/ui/header";
import { PropsWithChildren } from "react";

export default function StoreLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-w-screen min-h-screen flex flex-col justify-between">
      <Header />

      <div className="flex flex-1">{children}</div>

      <Footer />
    </div>
  );
}
