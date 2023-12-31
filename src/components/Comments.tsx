import { WEBSITE_URL } from "config";
import CommentForm from "./CommentForm";
import { currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api"
import Link from "next/link";

export default async function Comments({ slug }: { slug: string }) {
  let comments = [];
  try {
    const commentsRes = await fetch(`${WEBSITE_URL}/api/comments/${slug}`, { next: { revalidate: 1 } });
    comments = await commentsRes.json();
  } catch (err) {
    console.log(err);
  }

  const user: User | null = await currentUser() 

  return (
    <div>
      {/* @ts-ignore */}
      {user? <CommentForm slug={slug} username={user.username}/> : <Link href={`/sign-in?redirect=/blog/${slug}`}><p className="hover:text-yellow-400">Please sign in to comment</p></Link>}

      <h3 className="mt-8 text-blue-400 font-bold ">Comments:</h3>
      <ul>
        {/* @ts-ignore */}
        {comments.map((comment) => {
          return (
            <li className="my-4" key={comment.uuid}>
              {comment.username} says...
              <br />
              {comment.comment}
            </li>
          );
        })}
      </ul>
    </div>
  );
}