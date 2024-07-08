import { CreatePost } from "~/app/_components/create-post";
import Link from "next/link";
import { api } from "~/trpc/server";
import { db } from "~/server/db";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  const posts = await db.query.posts.findMany();
  console.log("posts", posts);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <h1>Hello</h1>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div>{post.name}</div>
      ))}
    </main>
  );
}

async function CrudShowcase() {
  const latestPost = await api.post.getLatest();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}

// some change
