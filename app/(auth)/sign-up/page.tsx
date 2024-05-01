import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SignUpForm } from "./_components/sign-up-form";
import Link from "next/link";

export default function SignUp() {
  return (
    <Card className="max-w-lg w-full">
      <CardHeader className="flex items-center justify-center">
        <Link href={"/"} className="font-extrabold text-2xl">
          Bijus
        </Link>
      </CardHeader>

      <CardContent className="">
        <p className="text-center text-muted-foreground mb-8">
          Preencha seus dados para realizar o cadastro...
        </p>
        <SignUpForm />
      </CardContent>
    </Card>
  );
}
