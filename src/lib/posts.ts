import { allPosts as POSTS } from "contentlayer/generated";

// const POSTS = [
//   {
//     title: "Blog One",
//     slug: "post-one",
//     content: "Hey this is my post one",
//     catslug: "apple"
//   },
//   {
//     title: "Blog Two",
//     slug: "post-two",
//     content: "Hey this is my post two",
//     catslug: "banana"
//   },
//   {
//     title: "Blog Three",
//     slug: "post-three",
//     content: "Hey this is my post three",
//     catslug: "catapiller"
//   },
// ];

// get ALL the posts (simulating an API or database)
export function getPosts() {
  return POSTS;
}

// get ONE of the posts (simulating an API or database)
export function getPostBySlug(slug: string) {
  return POSTS.find((post) => post.slug === slug);
}

// export function getPostByCatSlug(catslug: string) {
//     return POSTS.filter((post) => post.catslug === catslug);
//   }