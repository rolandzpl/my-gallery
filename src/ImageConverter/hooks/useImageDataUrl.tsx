import { useState } from 'react';

export function useImageDataUrl(image: Blob | null) {
  const [imageDataUrl, setImageDataUrl] = useState<string | undefined>(undefined);
  if (!image) return undefined;
  const reader = new window.FileReader();
  reader.onload = function () {
    setImageDataUrl(reader.result as string);
  };
  reader.readAsDataURL(image);
  return imageDataUrl;
}
