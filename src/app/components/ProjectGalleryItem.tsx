interface ProjectGalleryItemProps {
  src: string;
  projectName: string;
  index: number;
}

export function ProjectGalleryItem({ src, projectName, index }: ProjectGalleryItemProps) {
  const isInstagramEmbed = src.includes('instagram.com');
  const isConverterVideo = src.includes('converter.video');
  const isGoogleDrive = src.includes('drive.google.com');
  
  // Extract Google Drive file ID and convert to embed URL
  const getGoogleDriveEmbedUrl = (url: string) => {
    const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (fileIdMatch && fileIdMatch[1]) {
      return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
    }
    return url;
  };
  
  // For Google Drive videos - embed directly
  if (isGoogleDrive) {
    return (
      <div className="aspect-video overflow-hidden rounded-lg bg-gray-200">
        <iframe 
          src={getGoogleDriveEmbedUrl(src)}
          className="w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={`${projectName} - Video ${index + 1}`}
        />
      </div>
    );
  }
  
  // For converter.video links OR Instagram links - open in new tab
  if (isConverterVideo || isInstagramEmbed) {
    return (
      <a 
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className="aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg relative group cursor-pointer block"
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <svg 
            className="w-20 h-20 mb-4 group-hover:scale-110 transition-transform" 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
          </svg>
          <p className="text-lg font-semibold">{isInstagramEmbed ? 'Watch on Instagram' : 'Play Video'}</p>
          <p className="text-sm text-gray-300 mt-2">Click to watch</p>
        </div>
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
      </a>
    );
  }
  
  return (
    <div className="aspect-video overflow-hidden">
      {src.endsWith('.mp4') ? (
  <video
    src={src}
    autoPlay
    muted
    loop
    playsInline
    controls
    className="w-full h-full object-cover"
  />
) : (
  <img
    src={src}
    alt={`${projectName} - Image ${index + 1}`}
    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
  />
)}
    </div>
  );
}