import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import AllToys from "../pages/AllToys/AllToys";
import Blogs from "../pages/Blogs/Blogs";
import Contact from "../pages/Contact/Contact";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddToy from "../pages/AddToy/AddToy";
import MyToys from "../pages/MyToys/MyToys";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>   
            },
            {
                path:'alltoys',
                element: <AllToys></AllToys>,
                
            },
            {
                path:'blogs',
                element: <Blogs></Blogs>
            },
            {
                path:'contact',
                element: <Contact></Contact>
            },
            {
                path:'login',
                element: <Login></Login>
            },
            {
                path:'register',
                element: <Register></Register>
            },
            {
                path: 'addtoy',
                element: <AddToy></AddToy>
            },
            {
                path: 'mytoys',
                element: <MyToys></MyToys>
            }
        ]
    }
])


export default router;