import { createBrowserRouter } from "react-router";
import AdminPage from "./Admin/pages";
import Layout from "./Layout";
import { GalleryCreate, GalleryIndex, GalleryPage } from "./Gallery/pages";
import { HomePage } from "./Home/pages";

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
      { key: 'galleries', label: 'Galleries', url: '/gallery' },
      { key: 'about', label: 'About', url: '/about' },
      { key: 'contact', label: 'Contact', url: '/contact' }
    ]} />),
  }
]);

export default router;
