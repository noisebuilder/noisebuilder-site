const article = {
  title: "NOISEBUILDER STARLIGHT",
  content: `
Listen & Download : <a href="https://fanlink.tv/noisebuilder-starlight-junkyrobot" target="_blank" class="text-green-500 underline hover:no-underline">https://fanlink.tv/noisebuilder-starlight-junkyrobot</a>
       <div class="mt-8">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/JAFxh9j49jc?si=CY-24eKid8FZtKYR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

export default function Article2() {
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
