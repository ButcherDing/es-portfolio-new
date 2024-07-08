import { TopNav } from "./_components/topNav";
import { db } from "~/server/db";

export const dynamic = "force-dynamic"; // might not be necessary

export default async function Home() {
  const images = await db.query.images.findMany({
    orderBy: (model, { asc }) => asc(model.id),
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <TopNav />
      <h2>Images</h2>
      {images.map((image, index) => (
        <div key={image.id + "" + index}>
          <img src={image.url} alt={image.name} />
          {image.name}
        </div>
      ))}
    </main>
  );
}
