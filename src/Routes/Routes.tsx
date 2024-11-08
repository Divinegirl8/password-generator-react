import path from "path";
import FrontPage from "../component/FrontPage";
import History from "../component/History";

export const Routes = [
    {
        path: "/",
        element : <FrontPage/>
    },
    {
        path : "/history",
        element : <History/>

    }
]