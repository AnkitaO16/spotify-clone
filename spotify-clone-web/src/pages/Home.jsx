import { useEffect, useState } from "react"

const dummyPlaylists = [
  { id: 1, title: "Chill Vibes", created_at: "2025-04-01" },
  { id: 2, title: "Workout Mix", created_at: "2025-03-22" },
  { id: 3, title: "Focus Flow", created_at: "2025-02-15" },
]

export default function Home() {
  const [playlists, setPlaylists] = useState([])

  useEffect(() => {
    // Simulate fetch
    setTimeout(() => setPlaylists(dummyPlaylists), 500)
  }, [])

  return (
    <div className="min-h-screen bg-[#121212] text-white p-6">
      <h1 className="text-3xl font-bold mb-6 text-spotify">🎵 Your Playlists</h1>

      {playlists.length === 0 ? (
        <p className="text-gray-400">No playlists found. Let's create one!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {playlists.map((playlist) => (
            <div
              key={playlist.id}
              className="bg-[#1e1e1e] p-4 rounded-xl shadow hover:bg-[#2a2a2a] transition-all"
            >
              <h2 className="text-xl font-semibold">{playlist.title}</h2>
              <p className="text-sm text-gray-400">
                Created on {new Date(playlist.created_at).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
