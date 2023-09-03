import { Outlet } from "react-router-dom";

import MovieNavigation from "../components/MovieNavigation";

function MovieRootLayout() {
    return (
        <>
        <MovieNavigation />
        <Outlet />
        </>
    )
}

export default MovieRootLayout