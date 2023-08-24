
import Link from 'next/link'
import styles from './page.module.css'
import Image from "next/image";
import { Roboto, Poppins } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["900"] });
const poppins = Poppins({ subsets: ["latin"], weight: [ "900"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="text-2xl {poppins.className} hover:text-yellow-400"><Link href={"/blog"}>My posts</Link></h1>
      <Image src="/dance-blog.jpg" alt="dance-blog-image" width={400} height={225} />
      <p className="text-2xl {roboto.className}">Welcome to my Dance Blog</p>
    </main>
  )
}

// import Link from 'next/link'
// import { compareDesc, format, parseISO } from 'date-fns'
// import { allPosts as POSTS, Post } from 'contentlayer/generated'

// function PostCard(post: Post) {
//   return (
//     <div className="mb-8">
//       <h2 className="mb-1 text-xl">
//         <Link href={post.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
//           {post.title}
//         </Link>
//       </h2>
//       <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
//         {format(parseISO(post.date), 'LLLL d, yyyy')}
//       </time>
//       <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} />
//     </div>
//   )
// }

// export default function Home() {
//   const posts = POSTS.sort((a: Post, b: Post) => compareDesc(new Date(a.date), new Date(b.date)))

//   return (
//     <div className="mx-auto max-w-xl py-8">
//       <h1 className="mb-8 text-center text-2xl font-black">Next.js + Contentlayer Example</h1>
//       {posts.map((post: Post, idx: number) => (
//         <PostCard key={idx} {...post} />
//       ))}
//     </div>
//   )
// }
