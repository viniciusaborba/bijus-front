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

const signInFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
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

  const router = useRouter();

  async function onSubmit(data: SignInFormSchemaType) {
    try {
      const response = await api.post("/sessions", {
        email: data.email,
        password: data.password,
      });

      localStorage.setItem(
        "@bijus:token",
        JSON.stringify({ token: response.data.token })
      );

      router.push("/");
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
