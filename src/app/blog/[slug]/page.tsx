import Comments from "@/components/Comments";
import { getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";

type BlogPostParams = {
  params: {
    slug: string;
  };
};

export default function BlogPost({ params }: BlogPostParams) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className = "bg-white dark:bg-slate-800">
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.body.html }} className="prose dark:prose-invert" ></div>
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