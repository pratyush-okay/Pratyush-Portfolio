import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Pratyush</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a passionate and fast-learning Software Engineer, currently building full-stack features and experimenting with AI at SmallChess with ex Chess.com Head of Data Science & Principal Engineer, where I&apos;m helping enhance a mobile chess platform with smart, scalable technology.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        With a Master&apos;s in IT from UNSW (specializing in AI) and hands-on experience in React, Python, Node.js, and cloud technologies, I thrive at the intersection of web development, intelligent systems, and user-focused design.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m currently working toward AWS certifications while also building exciting side projects that explore the power of AI, full-stack architecture, and automation.
      </Paragraph>
 
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-10 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
