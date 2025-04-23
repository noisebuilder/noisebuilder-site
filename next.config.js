/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enlevez l'option `output: 'export'` si vous utilisez des API Routes
  // Si vous souhaitez conserver l'export statique, laissez cette ligne, mais sachez qu'il vous faut éviter les API Routes
  // output: 'export',  

  images: {
    unoptimized: true,
  },

  // Autres configurations nécessaires si vous en avez
};

module.exports = nextConfig;
