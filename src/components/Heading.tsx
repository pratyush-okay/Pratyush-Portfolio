import React from "react";
import localFont from "next/font/local";
import { twMerge } from "tailwind-merge";

const CalSans = localFont({
  src: [{ path: "../../fonts/CalSans-SemiBold.woff2" }],
  display: "swap",
});

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type HeadingProps = {
  className?: string;
  children: string | JSX.Element | JSX.Element[];
  as?: HeadingElement;
};

export const Heading = ({
  className = "",
  children,
  as: Tag = "h1",
}: HeadingProps) => (
  <Tag
    className={twMerge(
      CalSans.className,
      "text-base md:text-xl lg:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary",
      className
    )}
  >
    {children}
  </Tag>
);