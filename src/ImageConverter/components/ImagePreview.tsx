import type { FC } from 'react';
import { useImageDataUrl } from '../hooks/useImageDataUrl';

export const ImagePreview: FC<{ image: Blob | null; }> = ({ image }) => {
  const imageDataUrl = useImageDataUrl(image);
  return <img style={{
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
  }} src={imageDataUrl} alt="Converted Image" />;
};
