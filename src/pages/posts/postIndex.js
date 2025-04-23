// pages/posts/postIndex.js

import React from 'react';

export const posts = [
  {
    title: "NOISEBUILDER STARLIGHT",  // Article le plus récent
    excerpt: "Listen & Download : https://fanlink.tv/noisebuilder-starlight-junkyrobot",
    slug: "0002",
  },
  {
    title: "NOISEBUILDER FREQ EP",
    excerpt: "Listen & Download : https://fanlink.tv/FREQEP",
    slug: "0001",
  },
  {
    title: "NOISEBUILDER ANOTHER EP",
    excerpt: "Listen & Download : https://fanlink.tv/anotherep",
    slug: "0003",
  },
  // Ajouter d'autres articles ici
];

const PostIndex = () => {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <h2>{post.title}</h2>
            <p>{post.excerpt}</p>
            <a href={`https://fanlink.tv/${post.slug}`}>Read more</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostIndex;
