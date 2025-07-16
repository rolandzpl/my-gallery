import { type FC } from 'react';
import { GalleryIndex } from '../components';
import { useGalleries } from '../hooks/useGalleries';

const Index: FC = () => {
    const { galleries } = useGalleries();
    return (
        <GalleryIndex items={galleries} />
    );
};

export default Index;
