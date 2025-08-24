import { createBrowserRouter } from "react-router";
import AdminPage from "./Admin/pages";
import Layout from "./Layout";
import { GalleryCreate, GalleryIndex, GalleryPage } from "./Gallery/pages";
import { HomePage } from "./Home/pages";
import { ImageConverterPage } from "./ImageConverter";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "admin",
        children: [
          {
            index: true,
            element: <AdminPage />,
          }
        ]
      },
      {
        path: "image-converter",
        children: [
          {
            index: true, element: <ImageConverterPage />
          }
        ]
      },
      {
        path: "gallery",
        children: [
          {
            index: true,
            element: <GalleryIndex />,
          },
          {
            path: "create",
            element: <GalleryCreate />,
          },
          {
            path: ":id",
            element: <GalleryPage />,
          }
        ]
      },
    ],
    element: (<Layout menuItems={[
      { key: 'home', label: 'Home', url: '/' },
      { key: 'image-converter', label: 'Image Converter', url: '/image-converter' },
      { key: 'galleries', label: 'Galleries', url: '/gallery' },
      { key: 'about', label: 'About', url: '/about' },
      { key: 'contact', label: 'Contact', url: '/contact' }
    ]} />),
  }
]);

export default router;
