import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import AllToys from "../pages/AllToys/AllToys";
import Blogs from "../pages/Blogs/Blogs";
import Contact from "../pages/Contact/Contact";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>   
            },
            {
                path:'alltoys',
                element: <AllToys></AllToys>
            },
            {
                path:'blogs',
                element: <Blogs></Blogs>
            },
            {
                path:'contact',
                element: <Contact></Contact>
            }
        ]
    }
])


export default router;