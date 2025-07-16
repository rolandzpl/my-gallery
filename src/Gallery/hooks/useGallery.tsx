import { useQuery } from "@tanstack/react-query";
import itemData from "../data/itemData";

export const useGallery = (id?: string) => {
    const { data } = useQuery({
        queryKey: ['gallery', id],
        queryFn: async () => {
            return itemData;
        }
    });
    return {
        title: 'Gallery One',
        items: data?.map(item => {
            return {
                ...item,
                id
            };
        }) || [],
    };
}
