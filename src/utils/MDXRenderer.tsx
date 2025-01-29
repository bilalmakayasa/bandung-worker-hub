"use client"; // Mark this as a Client Component

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

interface MDXRendererProps {
  mdxSource: MDXRemoteSerializeResult;
}

export default function MDXRenderer({ mdxSource }: MDXRendererProps) {
  return <MDXRemote {...mdxSource} />;
}