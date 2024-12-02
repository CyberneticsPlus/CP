export const generateSrcSet = (imageUrl: string, sizes: number[] = [320, 640, 768, 1024, 1280]) => {
  if (!imageUrl) return '';
  
  return sizes
    .map(size => {
      const url = new URL(imageUrl);
      url.searchParams.set('w', size.toString());
      return `${url.toString()} ${size}w`;
    })
    .join(', ');
};

export const getImageDimensions = (aspectRatio: number = 16/9) => {
  const viewportWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
  const width = Math.min(viewportWidth, 1920);
  const height = Math.round(width / aspectRatio);
  return { width, height };
};

export const optimizeImageUrl = (url: string, width: number, quality: number = 80) => {
  if (!url) return '';
  try {
    const imageUrl = new URL(url);
    imageUrl.searchParams.set('w', width.toString());
    imageUrl.searchParams.set('q', quality.toString());
    imageUrl.searchParams.set('auto', 'format');
    return imageUrl.toString();
  } catch {
    return url;
  }
};