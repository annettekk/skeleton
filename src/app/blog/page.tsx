import Link from "next/link";
import { getPosts } from "@/lib/posts";
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Anna's blog - all posts",
  description: "Look at all the posts!",
};

export default async function BlogPage() {
  const posts = getPosts();
 

  return (
    <div className = "flex ">
      {/* <h2>My Posts</h2> */}
      <ul className = "m-4 leading-loose text-xl">
        {posts.map((post) => {
          return (
            <li className="hover:text-yellow-400 my-2" key={post.slug}>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>

   
      
        {/* {posts.map((post) => {
          let catArr: string[] = [] 
          if (!(catArr.includes({post.catslug}))) {
            catArr.push({post.catslug})
          } 
          console.log(catArr)
          for (let i = 0; i < catArr.length; i++) {
          return (
            
            <li key={post.slug}>
              <Link href={`/blog/categories/${catArr[i]}`}>catArr[i]</Link>
            </li>
            
        ) } } ) } */}
        
      

    </div>
  ) }
