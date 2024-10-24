import { Container } from "@/components/Container";
import { SingleProduct } from "@/components/Product";
import { products } from "@/constants/products";
import { Product } from "@/types/products";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ 
  params 
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  
  if (product) {
    return {
      title: product.title,
      description: product.description,
    };
  }
  
  return {
    title: "Projects | Pratyush Panda",
    description:
      "A web developer exploring the realms of AI, fueled by newfound passion and curiosity. I think outside the box and face challenges with enthusiasm and determination. ",
  };
}

export default async function SingleProjectPage({
  params,
}: PageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    redirect("/projects");
  }

  return (
    <Container>
      <SingleProduct product={product} />
    </Container>
  );
}