import { db } from "~/server/db";

export const dynamic = "force-dynamic"; // might not be necessary

export default async function Home() {
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

// some change
