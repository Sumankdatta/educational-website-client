import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Blog from "../../pages/Blog/Blog";
import Category from "../../pages/Category/Category";
import CourseDetails from "../../pages/CourseDetails/CourseDetails";
import Courses from "../../pages/Courses/Courses";
import Faq from "../../pages/Faq/Faq";
import Home from "../../pages/Home/Home";


export const routes=createBrowserRouter([
   {
    path:'/',
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/courses',
            element:<Courses></Courses>,
            
        },
        {
            path:'/coursedetails/:id',
            element:<CourseDetails></CourseDetails>
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
        }
    ]
   } 
])
   