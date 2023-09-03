import { Outlet } from "react-router"

import MainNavigation from '../components/header/MainNavigation';
import SearchBar from "../components/SearchBar";

function RootLayout() {
    return (
    <>
    <MainNavigation />
    <SearchBar />
   <main>
       <Outlet />
   </main>
    </>
    );
}

export default RootLayout;