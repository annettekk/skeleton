import { getPostByCatSlug } from "@/lib/posts";
import { notFound } from "next/navigation";

type CatPostParams = {
  params: {
    catslug: string;
  };
};

export default function BlogPostFilteredyCat({ params }: CatPostParams) {
  const post = getPostByCatSlug(params.catslug);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}