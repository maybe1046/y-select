async function Home() {
  const response = await fetch("http://localhost:3000/albums.json");

  if (!response.ok) {
    throw new Error("Failed to fetch albums");
  }
  const albums = await response.json();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-col">
      {albums
        .slice(0, 5)
        .map(({ id, title }: { id: number; title: string }) => (
          <div key={id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-bold mb-2">{title}</h2>
            <p className="text-gray-600">Album ID: {id}</p>
          </div>
        ))}
    </div>
  );
}

export default Home;
