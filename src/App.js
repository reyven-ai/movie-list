import { RouterProvider, createBrowserRouter, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import MovieDetailPage from "./components/Movies/MovieDetail";
import ErrorPage from "./pages/Error";
// import TvShowPage from "./pages/TvShow";
// import TvShowDetails from "./components/tvshow/TvShowDetails";
// // import SeriesPage from './pages/Movie';
// import NewPopularPage from "./pages/NewPopular";
// import NewPopularDetails from "./components/newpopular/NewPopularDetails";
import MyListPage from "./pages/MyList";
import BrowseByLanguagePage from "./pages/BrowseByLanguage";
import RootLayout from "./pages/Root";
import SearchResults from "./pages/SearchResult";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/movie/:id", element: <MovieDetailPage /> },
      { path: "/search?/:query", element: <SearchResults /> },
      { path: "/mylist", element: <MyListPage /> },
      { path: "/language", element: <BrowseByLanguagePage /> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <Route path="/" element={<RootLayout />} />
    </RouterProvider>
  );
}

export default App;
