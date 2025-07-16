import { useQuery } from "@tanstack/react-query";
import { galleriesData } from "../data";

export const useGalleries = () => {
    const { data } = useQuery({
        queryKey: ['galleries'],
        queryFn: async () => {
            return galleriesData;
        }
    });
    return {
        galleries: data || [],
        addGallery: () => { },
        removeGallery: () => { }
    };
}

