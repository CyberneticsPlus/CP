export type ImageFormat = 'image/jpeg' | 'image/png' | 'image/webp' | 'image/avif';

export interface PreloadOptions {
  formats?: ImageFormat[];
  timeout?: number;
  priority?: 'high' | 'low' | 'auto';
}

export interface PreloadResult {
  url: string;
  success: boolean;
  error?: string;
}
