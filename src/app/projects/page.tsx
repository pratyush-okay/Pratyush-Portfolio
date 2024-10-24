import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects | Pratyush Panda",
  description:
    "A web developer exploring the realms of AI, fueled by newfound passion and curiosity. I think outside the box and face challenges with enthusiasm and determination. ",
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">⚡</span>
      <Heading className="font-black mb-10">
  What I have been working on
</Heading>


      <Products />
    </Container>
  );
}
