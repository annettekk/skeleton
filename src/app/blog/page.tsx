import Link from "next/link";
import { getPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div>
      <h2>My Posts</h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
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
