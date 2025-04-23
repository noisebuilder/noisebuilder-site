const article = {
  title: "NOISEBUILDER FREQ EP",
  content: `
    Listen & Download : <a href="https://fanlink.tv/FREQEP" target="_blank" class="text-green-500 underline hover:no-underline">https://fanlink.tv/FREQEP</a>
    <div class="mt-8">
      <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1970910208&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
      </iframe>
      <div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
        <a href="https://soundcloud.com/noisebuilderoff" title="NOISEBUILDER || JUNKY ROBOT rec." target="_blank" style="color: #cccccc; text-decoration: none;">
          NOISEBUILDER || JUNKY ROBOT rec.
        </a> · 
        <a href="https://soundcloud.com/noisebuilderoff/sets/freq-ep" title="FREQ EP (JUNKY ROBOT)" target="_blank" style="color: #cccccc; text-decoration: none;">
          FREQ EP (JUNKY ROBOT)
        </a>
      </div>
    </div>
  `,
};

export default function Article1() {
  return (
    <div className="min-h-screen p-8 bg-black text-green-500 font-mono">
      <h1 className="text-4xl font-bold mb-6 text-left">{article.title}</h1>
      <div
        className="text-lg mb-8"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
      <a
        href="/"
        className="text-green-500 underline hover:no-underline"
      >
        ← BACK
      </a>
    </div>
  );
}
