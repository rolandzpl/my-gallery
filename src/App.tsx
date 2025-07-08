import { createBrowserRouter, RouterProvider } from 'react-router';
import AdminPage from './pages/Admin';
import GalleryPage from './pages/Gallery';

import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>My Gallery</h1>
        <p>Welcome to my gallery app!</p>
        <p>Explore the collection of images and artworks.</p>
        <p>Use the navigation to browse through different categories.</p>
        <p>Enjoy your visit!</p>
        <p>Feel free to contact us for any inquiries.</p>
        <p>Follow us on social media for updates.</p>
        <p>Thank you for visiting!</p>
        <p>We hope you have a great experience!</p>
        <p>Stay tuned for more features and improvements.</p>
        <p>Happy browsing!</p>
      </div>
    ),
  },
  {
    path: "/admin",
    element: <AdminPage />,
  },
  {
    path: "/gallery",
    element: <GalleryPage />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
