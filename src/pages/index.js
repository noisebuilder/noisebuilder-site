import Link from "next/link";
import { posts } from "./posts/postIndex"; // Chemin relatif correct

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-green-500 font-mono">
      {/* Header panel */}
      <header className="p-4 bg-black border-b border-green-500">
        <h1 className="text-4xl font-bold text-center">NOISEBUILDER.COM</h1>
        <p className="text-center mt-2">
          Raw. Heavy. Slow. Simple. Efficient.
          <br />
          I don’t make music to entertain. I don’t follow trends.
        </p>
      </header>

      {/* Main content */}
      <main className="flex flex-1 p-4">
        {/* Contenu principal (centre) */}
        <div className="w-3/4 pr-4">
          <div className="flex flex-col space-y-6">
            {/* Affichage des articles */}
            {posts.map((post, index) => (
              <div key={index} className="p-4 bg-black border border-green-500">
                <h2 className="text-2xl font-bold">
                  <Link href={`/posts/${post.slug}`}> {/* Lien vers l'article */}
                    {post.title} {/* Titre de l'article */}
                  </Link>
                </h2>
                <p>{post.excerpt}</p> {/* Extrait de l'article */}
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar panels (panneaux latéraux) */}
        <div className="w-1/4 ml-4 space-y-4">
          {/* Social media panel */}
          <div className="p-4 bg-black border border-green-500">
            <h2 className="text-xl font-bold">SOCIALS & MORE</h2>
            <ul>
              <li><a href="https://linktr.ee/noisebuilder" className="hover:underline" target="_blank" rel="noopener noreferrer">ALL</a></li>
              <li><a href="https://facebook.com/noisebuilderoff" className="hover:underline" target="_blank" rel="noopener noreferrer">FACEBOOK</a></li>
              <li><a href="https://instagram.com/noisebuilderoff" className="hover:underline" target="_blank" rel="noopener noreferrer">INSTAGRAM</a></li>
              <li><a href="https://x.com/noisebuilderoff" className="hover:underline" target="_blank" rel="noopener noreferrer">TWITTER</a></li>
            </ul>
          </div>

          {/* Image/Video panel */}
          <div className="p-4 bg-black border border-green-500">
            <h2 className="text-xl font-bold">NOISEBUILDER</h2>
            <div className="mt-4">
              {/* Ajout du GIF en utilisant une balise img classique */}
              <img 
                src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDJobDg0cG1uY2NsbWY3dzFpbXVzYm1oZ2QzOTVyY3Qxb201NHA0ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PPLozltZwt2sOs69zP/giphy.gif" 
                alt="Noisebuilder GIF" 
                className="max-w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-green-500 p-4 text-center">
        <p>&copy; NOISEBUILDER.COM__2K25.</p>
      </footer>
    </div>
  );
}
