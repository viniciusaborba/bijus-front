"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { api } from "@/service/api";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

const signUpFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  cellphoneNumber: z.string(),
  name: z.string(),
  address: z.string(),
  cpf: z.string(),
});

type SignUpFormSchemaType = z.infer<typeof signUpFormSchema>;

export function SignUpForm() {
  const form = useForm<SignUpFormSchemaType>({
    defaultValues: {
      email: "",
      password: "",
      cellphoneNumber: "",
      name: "",
      address: "",
      cpf: "",
    },
    resolver: zodResolver(signUpFormSchema),
  });

  const router = useRouter();
  const { toast } = useToast();

  async function onSubmit(data: SignUpFormSchemaType) {
    try {
      const response = await api.post("/users", {
        email: data.email,
        password: data.password,
        name: data.name,
        address: data.address,
        cpf: data.cpf,
        cellphoneNumber: data.cellphoneNumber,
      });

      router.push("/sign-in");
      toast({
        title: "Acesso criado!",
        description: "Realize o seu login!"
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Preencha o seu email" />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Preencha a sua senha" />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Preencha o seu nome" />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cpf"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CPF</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Preencha o seu CPF" />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cellphoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Número de celular</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Preencha o seu número de celular"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Endereço</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Preencha o seu Endereço" />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="bg-purple-dark mt-4">
          Cadastrar
        </Button>

        <div className="flex gap-1 items-center justify-center mt-2">
          <span>Já possui uma conta?</span>
          <Button type="button" variant="link" className="p-0">
            <Link href={"/sign-in"} className="text-purple-dark">
              Acessar
            </Link>
          </Button>
        </div>
      </form>
    </Form>
  );
}
