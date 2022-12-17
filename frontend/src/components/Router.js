import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import Banner from './Banner'
import FetchData from './FetchData'
import Cupboard from './Cupboard'

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <>
                <Banner />
                <FetchData />
            </>
            
    },

    ]);
    return(
        ReactDOM.createRoot(document.getElementById("root")).render(
            <React.StrictMode>
              <RouterProvider router={router} />
            </React.StrictMode>
          )
    )
}



export default Router