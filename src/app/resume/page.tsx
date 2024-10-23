import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { WorkHistory } from "@/components/WorkHistory";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <span className="text-4xl">💼</span>
      <Heading className="font-black">Work History</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m a full-stack developer that loves{" "}
        <Highlight>building products</Highlight> and web apps that can impact
        millions of lives
      </Paragraph>
      <div className="relative pt-[115%] mt-8"> {/* 16:9 Aspect Ratio */}
        <iframe
          src="/resume.pdf"
          className="absolute top-0 left-0 w-full h-full border"
        >
          This browser does not support PDFs. Please download the PDF to view it:
          <a href="/resume.pdf">Download PDF</a>
        </iframe>
      </div>
    </Container>
  );
}
