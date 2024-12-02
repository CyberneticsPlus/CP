/**
 * Validates image paths and URLs
 */
export const validateImagePath = (path: string): boolean => {
  if (!path) return false;
  
  // For local images, ensure they start with /
  if (path.startsWith('/')) {
    // Validate common image extensions
    const validExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif'];
    return validExtensions.some(ext => path.toLowerCase().endsWith(ext));
  }

  // For external URLs, ensure they're valid
  try {
    const url = new URL(path);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
};

/**
 * Gets the MIME type from image path
 */
export const getImageType = (path: string): string | null => {
  const extension = path.split('.').pop()?.toLowerCase();
  
  switch (extension) {
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    case 'png':
      return 'image/png';
    case 'webp':
      return 'image/webp';
    case 'avif':
      return 'image/avif';
    case 'gif':
      return 'image/gif';
    default:
      return null;
  }
};