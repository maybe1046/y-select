import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import type { StartupTypeCard } from "@/lib/utils";

export default async function Home({
  searchParams,
  params,
}: {
  searchParams: Promise<{ query: string }>;
  params: Promise<{ id: string }>;
}) {
  const query = (await searchParams).query; // query string/query params
  // const test = await params; // path/routing segements

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? `http://localhost:${process.env.PORT ?? 3000}`;
  const posts: StartupTypeCard[] = await fetch(`${baseUrl}/posts.json`).then((res) => res.json());

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect with Entrepreneurs
        </h1>

        <p className="sub-heading max-w-3xl!">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post) => <StartupCard key={post.id} post={post} />)
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
