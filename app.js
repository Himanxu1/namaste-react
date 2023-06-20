import React, { Children } from "react";
import ReactDOM from 'react-dom/client'
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom';
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import RestaurantDetail from "./src/components/RestaurantDetail";
import { Provider } from "react-redux";
import store from "./src/utils/store";
import Cart from "./src/components/Cart";


const AppLayout = ()=>{
    return (
        <Provider store={store}>
            <Header/>
            <Outlet/>
            <Footer/>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
              path:'/',
            element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/restaurant/:id',
                element:<RestaurantDetail/>
            },
            {
                path:'/cart',
                element:<Cart/>
            }
        ]
    
    },

])


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)
