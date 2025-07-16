import { createBrowserRouter } from "react-router";
import AdminPage from "./Admin/pages";
import Layout from "./Layout";
import { GalleryIndex, GalleryPage } from "./Gallery/pages";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
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
            path: ":id",
            element: <GalleryPage />,
          }
        ]
      },
    ],
    element: (<Layout menuItems={[
      { key: 'home', label: 'Home', url: '/' },
      { key: 'gallery', label: 'Gallery', url: '/gallery' },
      { key: 'about', label: 'About', url: '/about' },
      { key: 'contact', label: 'Contact', url: '/contact' }
    ]} />),

    // <div>
    //   <h1>My Gallery</h1>
    //   <p>Welcome to my gallery app!</p>
    //   <p>Explore the collection of images and artworks.</p>
    //   <p>Use the navigation to browse through different categories.</p>
    //   <p>Enjoy your visit!</p>
    //   <p>Feel free to contact us for any inquiries.</p>
    //   <p>Follow us on social media for updates.</p>
    //   <p>Thank you for visiting!</p>
    //   <p>We hope you have a great experience!</p>
    //   <p>Stay tuned for more features and improvements.</p>
    //   <p>Happy browsing!</p>
    // </div>
  }
]);

export default router;
