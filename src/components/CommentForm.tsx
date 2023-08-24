"use client";
// import { WEBSITE_URL } from "config";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function CommentForm({ slug, username }: { slug: string; username: string }) {
  // the router hook to trigger a page refresh
  const router = useRouter();

  // the react useTransition hook to manage client/server data updates WITHOUT refreshing the page
  // isPending gives us the abilit to show something while the transistion is running (like a spinner)
  const [isPending, startTransition] = useTransition();

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // get the information from the form
    // @ts-ignore
    // const username = event.target.username.value || "anonymous";
    // @ts-ignore
    const comment = event.target.comment.value;

    // form validation goes here

    // create our formData object
    const formData = new FormData();
    formData.append("username", username);
    formData.append("comment", comment);

    // make our API call
    const options = { body: formData, method: "POST" };
    const res = await fetch(`/api/comments/${slug}`, options);
    console.log(res);

    // @ts-ignore
    // event.target.username.value = "";
    // @ts-ignore
    event.target.comment.value = "";

    // refresh the current route and fetch new datat from the serevr without lising the client-side browser or React State
    startTransition(() => {
      router.refresh();
      console.log("relocation the page data");
    });
  }

  return (
    <form onSubmit={handleFormSubmit}>
      {/* <label htmlFor="username">Name</label> */}
      <br />
      <p>Commenting as <strong>{username}</strong></p>
      {/* <input name="username" className="text-black border-2 border-grey-400" /> */}
      <br />
      <br />
      <label htmlFor="comment">Comment</label>
      <br />
      <textarea name="comment" cols={30} rows={10} className="text-black border-2 border-grey-400" required />
      <br />
      <br />
      <button type="submit" disabled={isPending}>
        {isPending ? "Sending..." : "Send Comment"}
      </button>
    </form>
  );
}