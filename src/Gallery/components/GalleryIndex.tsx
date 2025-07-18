import { type FC } from "react";
import { Button, ImageList, ImageListItem, Toolbar } from "@mui/material";
import { useNavigate } from "react-router";

export type GalleryIndexProps = {
    items: {
        id: string;
        caption: string;
        img: string;
        title: string
    }[];
};

const GalleryIndex: FC<GalleryIndexProps> = ({ items }) => {
    const navigate = useNavigate()
    const handleCreate = () => {
        navigate('/gallery/create');
    }
    return (<div>
        <div>
            <Toolbar variant="dense">
                <Button onClick={handleCreate}>Create</Button>
            </Toolbar>
        </div>
        <ImageList variant="masonry" cols={3} gap={8}>
            {items.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                        style={{ borderRadius: 8 }}
                        onClick={() => {
                            navigate(`/gallery/${item.id}`)
                        }}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    </div>);
}

export default GalleryIndex;
