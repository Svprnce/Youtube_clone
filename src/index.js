import React, {lazy, Suspense} from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Body from "../components/Body";

const Watchpagecontainer = lazy(()=> import("../components/Watchpage"))

const router = createBrowserRouter([{
   path : '',
   element : <App/>,
   children : [{
      path : '',
      element : <Body/>,
   },
   {
      path : '/watch/:id',
      element : <Suspense fallback={<h2>Container Loading</h2>}><Watchpagecontainer/></Suspense>
}]
}])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <RouterProvider router={router}/>
);
