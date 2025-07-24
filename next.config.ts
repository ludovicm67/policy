import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  output: "export",
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
