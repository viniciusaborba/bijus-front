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
import { useCookies } from "next-client-cookies";
import { useToast } from "@/components/ui/use-toast";

const signInFormSchema = z.object({
  email: z.string().email({ message: "Informe um email válido" }),
  password: z
    .string({ message: "Informe uma senha válida" })
    .min(6, { message: "Senha deve conter no mínimo 6 caracteres" }),
});

type SignInFormSchemaType = z.infer<typeof signInFormSchema>;

export function SigInForm() {
  const form = useForm<SignInFormSchemaType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(signInFormSchema),
  });

  const cookies = useCookies();

  const router = useRouter();

  const { toast } = useToast();

  async function onSubmit(data: SignInFormSchemaType) {
    try {
      const response = await api.post("/sessions", {
        email: data.email,
        password: data.password,
      });

      cookies.set("bijus-token", response.data.token);
      cookies.set("user_name", response.data.name);

      router.push("/");
    } catch (error) {
      toast({
        title: "Email ou senha inválidos!",
        description: "Por favor, informe corretamente os campos.",
        variant: "destructive",
      });

      form.reset();
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
                <Input {...field} placeholder="Preencha seu email" />
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
                <Input
                  {...field}
                  placeholder="Preencha sua senha"
                  type="password"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="bg-purple-dark mt-4"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Entrando..." : "Entrar"}
        </Button>

        <div className="flex gap-1 items-center justify-center mt-2">
          <span>Ainda não possui uma conta?</span>
          <Button type="button" variant="link" className="p-0">
            <Link href={"/sign-up"} className="text-purple-dark">
              Realizar cadastro
            </Link>
          </Button>
        </div>
      </form>
    </Form>
  );
}
