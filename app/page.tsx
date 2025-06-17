export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-100 to-white text-black">
      <h1 className="text-4xl font-bold mb-4">🎰 Welcome to BetByte Casino</h1>
      <p className="text-lg mb-6">Enter the world of chance and try your luck!</p>
      <a
        href="/lobby"
        className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-600 transition"
      >
        Enter Lobby
      </a>
    </main>
  );
}
