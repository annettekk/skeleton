import Comments from "@/components/Comments";
import { getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import kv from "@vercel/kv"
import { Metadata } from "next";
import Link from "next/link";

type BlogPostParams = {
  params: {
    slug: string;
  };
};
export function generateMetadata({ params }: BlogPostParams ) {
  return {
    title: `Anna's blog - ${params.slug}`,
    description: "This was created with the generateMetaData function",
  };
}

export default async function BlogPost({ params }: BlogPostParams) {
  const post = getPostBySlug(params.slug);
  const pageViews = await kv.incr(`views-${params.slug}`)
  

  if (!post) {
    notFound();
  }

  return (
    <div >
      <nav>
      <Link href={"/blog"}>View all posts</Link>
      </nav>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <p>This post has been viewed {pageViews} times</p>
      <div className="blog-content prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: post.body.html }} ></div>
    {/* @ts-ignore */}
    <Comments slug={params.slug} />
    </div>
  );
}

// import { format, parseISO } from 'date-fns'
// import { allPosts as POSTS } from 'contentlayer/generated'

// export const generateStaticParams = async () => POSTS.map((post) => ({ slug: post._raw.flattenedPath }))

// export const generateMetadata = ({ params }: { params: { slug: string } }) => {
//   const post = POSTS.find((post) => post._raw.flattenedPath === params.slug)
//   if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
//   return { title: post.title }
// }

// const PostLayout = ({ params }: { params: { slug: string } }) => {
//   const post = POSTS.find((post) => post._raw.flattenedPath === params.slug)
//   if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

//   return (
//     <article className="mx-auto max-w-xl py-8">
//       <div className="mb-8 text-center">
//         <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
//           {format(parseISO(post.date), 'LLLL d, yyyy')}
//         </time>
//         <h1 className="text-3xl font-bold">{post.title}</h1>
//       </div>
//       <div className="[&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} />
//     </article>
//   )
// }

// export default PostLayout