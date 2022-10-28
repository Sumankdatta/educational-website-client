import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Blog from "../../pages/Blog/Blog";
import Category from "../../pages/Category/Category";
import CourseDetails from "../../pages/CourseDetails/CourseDetails";
import Courses from "../../pages/Courses/Courses";
import Faq from "../../pages/Faq/Faq";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const routes=createBrowserRouter([
   {
    path:'/',
    element:<Main></Main>,
    children:[
        
        {
            path:'/',
            element:<Courses></Courses>,
            loader:()=>fetch('http://localhost:5000/coursedetails')
            
        },
        {
            path:'/coursedetails/:id',
            element:<PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:5000/coursedetails/${params.id}`)
           
        },
        {
            path:'/category/:id',
            element:<Category></Category>,
            loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            
        },
        {
            path:'/faq',
            element:<Faq></Faq>

        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
    ]
   }, 
   {path:'*', element: <div>This route is not found 404</div>}
])
   