import fs from "fs";
import path from "path";
import blogPosts from "@assets/data/articles";
import { serialize } from "next-mdx-remote/serialize";
import NavigationComponent from "@/components/ui/navigation";
import MDXRenderer from "@/utils/MDXRenderer"; // Import the Client Component
import Image from "next/image";

type BlogPostProps = Promise<{
    slug: string;
}>

export default async function BlogPost(props: {params: BlogPostProps}) {
  const { slug } = await props.params;
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
      <NavigationComponent />
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
