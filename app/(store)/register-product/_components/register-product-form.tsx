"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { api } from "@/service/api";
import { useCookies } from "next-client-cookies";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const registerProductFormSchema = z.object({
  name: z
    .string({ message: "Forneça o nome do produto" })
    .min(1, { message: "Forneça o nome do produto" }),
  description: z
    .string({ message: "Forneça a descrição do produto" })
    .min(1, { message: "Forneça a descrição do produto" }),
  categoryId: z.string().uuid({ message: "Forneça a categoria do produto" }),
  imageUrls: z.array(z.string()),
  basePrice: z.coerce
    .number()
    .min(1, { message: "Forneça o preço do produto" })
    .default(1),
  discountPercentage: z.coerce.number().optional().default(0),
});
type RegisterProductFormSchemaType = z.infer<typeof registerProductFormSchema>;

interface RegisterProductFormProps {
  categories: Category[];
}

const RegisterProductForm = ({ categories }: RegisterProductFormProps) => {
  const form = useForm<RegisterProductFormSchemaType>({
    defaultValues: {
      name: "",
      description: "",
      categoryId: "",
      imageUrls: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPF6QJggwIaEwxzSAXyaZqKCEfdJQDecIbKw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgSlxw5HjzlQLFy8YvVWlN9olRGg9xtpOVSQ&s",
        "https://cdn.dooca.store/1002/products/colar-fita-lisa-golden-ouro-13_640x640.jpg?v=1675457155&webp=0",
      ],
      basePrice: 1,
      discountPercentage: 0,
    },
    resolver: zodResolver(registerProductFormSchema),
  });

  const cookies = useCookies();

  const token = cookies.get("bijus-token");

  const { toast } = useToast();

  const router = useRouter();

  async function onSubmit(data: RegisterProductFormSchemaType) {
    try {
      console.log(token);

      const response = await api.post(
        "/products",
        {
          name: data.name,
          description: data.description,
          imageUrls: data.imageUrls,
          basePrice: data.basePrice,
          discountPercentage: data.discountPercentage,
          categoryId: data.categoryId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast({
        title: "Sucesso!",
        description: "Produto criado com sucesso!",
      });

      //   router.push("/");
    } catch (error) {}
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-8"
      >
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome do produto</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Preencha o nome do produto" />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Categoria do produto</FormLabel>
                <Select
                  defaultValue={field.value}
                  onValueChange={field.onChange}
                >
                  <FormControl>
                    <SelectTrigger>
                      {field.value ? <SelectValue /> : "Selecione a categoria"}
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {categories.map((item) => (
                      <SelectItem value={item.id} key={item.id}>
                        {item.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="basePrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preço do produto</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Preencha o preço do produto"
                    type="number"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="discountPercentage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Desconto do produto (opcional)</FormLabel>
                <FormControl>
                  <div className="flex items-center relative">
                    <Input
                      {...field}
                      placeholder="Preencha o desconto do produto"
                      type="number"
                    />
                    <span className="bg-purple-dark text-white p-2 rounded-r-lg absolute right-0">
                      %
                    </span>
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição do produto</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Preencha a descrição do produto"
                  className="resize-none h-[200px]"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          variant="secondary"
          className="uppercase self-end bg-purple-dark text-white hover:bg-purple-dark/80"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            "Cadastrar produto"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default RegisterProductForm;
