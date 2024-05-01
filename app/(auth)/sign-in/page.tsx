import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SigInForm } from "./_components/sign-in-form";
import Link from "next/link";

export default function SignIn() {
  return (
    <Card className="max-w-lg w-full">
      <CardHeader className="flex items-center justify-center">
        <Link href={"/"} className="font-extrabold text-2xl">
          Bijus
        </Link>
      </CardHeader>

      <CardContent className="">
        <p className="text-center text-muted-foreground mb-8">
          Entre para continuar navegando pela plataforma...
        </p>
        <SigInForm />
      </CardContent>
    </Card>
  );
}
