import { type FC } from 'react';
import Typography from '@mui/material/Typography';
import itemData from '../data/itemData';
import { Gallery } from '../components';
import { useParams } from 'react-router';

export const GalleryPage: FC = () => {
    const { id } = useParams<{ id: string }>();
    return (
        <div>
            <Typography variant="h4" component="h1" gutterBottom>
                Gallery {id}
            </Typography>
            <Gallery items={itemData} />
        </div>
    );
};

