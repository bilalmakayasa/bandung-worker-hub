import fs from "fs";
import path from "path";
import blogPosts from "@/data/articles";
import { serialize } from "next-mdx-remote/serialize";

import MDXRenderer from "@/utils/MDXRenderer"; // Import the Client Component
import Link from "next/link";
import Image from "next/image";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const post = blogPosts.find((post) => post.slug === slug);
  if (!post) {
    return <p>Post not found</p>;
  }

  // Load and serialize the MDX content
  const contentFilePath = path.join(process.cwd(), post.contentPath);
  const content = fs.readFileSync(contentFilePath, "utf-8");
  const mdxSource = await serialize(content);

  return (
    <div className="bg-white">
      <div className="w-full h-full flex items-start justify-between p-2 bg-main">
        <Link
          href="/"
          className="text-white font-title px-4 py-5 text-3xl font-bold hover:underline"
        >
          amokerja
        </Link>
        <div className="flex items-center justify-center px-4 py-5">
          {/* TODO: instead of apply this one by one, use map */}
          <Link
            href="/contact"
            className="text-white px-2 py-2 font-title text-sm font-normal hover:font-bold hover:underline"
          >
            Pusat Bantuan
          </Link>
          <Link
            href="/contact"
            className="text-white px-2 py-2  font-title text-sm font-normal hover:font-bold hover:underline"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-white font-title px-2 py-2 text-sm font-normal hover:font-bold hover:underline"
          >
            Tentang Kami
          </Link>
        </div>
      </div>
      <div className="px-5 my-10 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-black">{post.title}</h1>
        <p className="text-sm text-gray-500">
          By {post.author} on {post.date}
        </p>
        <div className="relative w-1/2 flex justify-center items-center mx-auto mt-5">
          <Image
            src={`/${post.imageUrl}`}
            alt={post.title}
            width={800}
            height={400}
            className="rounded-lg"
            priority
          />
        </div>
        <div className="py-10 px-48 prose text-black">
          <MDXRenderer mdxSource={mdxSource} />
        </div>
      </div>
    </div>
  );
}
