import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Metadata } from "next";
import Image from "next/image";

import { motion } from "framer-motion";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About | Pratyush Panda",
  description:
    "A web developer exploring the realms of AI, fueled by newfound passion and curiosity. I think outside the box and face challenges with enthusiasm and determination.",
};

export default function AboutPage() {
  const images = [
    "public/images/about/R0002365.JPG",
    "public/images/about/R0002748.JPG",
    "public/images/about/R0003003.JPG",
    "public/images/about/R0003107.JPG",
  ];
  return (
    <Container>
      <span className="text-4xl">💬</span>
      <Heading className="font-black">About Me</Heading>
      <About />
    </Container>
  );
}
