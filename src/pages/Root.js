import { Outlet } from "react-router";

import SearchBar from "../components/header/MovieHeader";

function RootLayout() {
  return (
    <>
      {/* <MainNavigation /> */}
      <SearchBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
