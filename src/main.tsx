import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home"
import Accessories from "./Pages/Accessories"
import New from "./Pages/New"
import Ayo from"./Pages/Ayo"
import Coll from "./Pages/Coll"
import Gill from "./Pages/Gill"
import Fix from "./Pages/Fix"
import Tip from "./Pages/Tip"
import Till from "./Pages/Till"
import Uper from "./Pages/Uper"
import Vex from "./Pages/Vex"
import Snick from "./Pages/Snick"
import Suit from "./Pages/Suit"
import Spi from "./Pages/Spi"
import Short from "./Pages/Short"
import Gie from "./Pages/Gie"
import Grey from "./Pages/Grey"
import Sil from "./Pages/Sil"
import Cole from "./Pages/Cole"
import Dele from "./Pages/Dele"
import Cut from "./Pages/Cut"
import Stores from "./Pages/Stores"
import City from "./Pages/City"
import Fashion from "./Pages/Fashion"
import Legacy  from "./Pages/Legacy"
import Scott from "./Pages/Scott"
import Wet from"./Pages/Wet"
import Dove from"./Pages/Dove"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/legacy",
    element: <Legacy />,
  },
  {
    path: "/accessories",
    element: <Accessories />,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/new",
    element: <New/>,
  },
  {
    path: "/stores",
    element: <Stores/>,
  },
  {
    path: "/ayo",
    element: <Ayo/>,
  },
  {
    path: "/city",
    element: <City/>,
  },
  {
    path: "/cole",
    element: <Cole/>,
  },
  {
    path: "/coll",
    element: <Coll/>,
  },
  {
    path: "/cut",
    element: <Cut/>,
  },
    {
    path: "/dele",
    element: <Dele/>,
  }
  ,
  {
    path: "/dove",
    element: <Dove/>,
  },
  {
    path: "/fashion",
    element: <Fashion/>,
  },
  {
    path: "/fix",
    element: <Fix/>,
  },
  {
    path: "/gie",
    element: <Gie/>,
  },
  {
    path: "/gill",
    element: <Gill/>,
  },
  {
    path: "/grey",
    element: <Grey/>,
  },  
  {
    path: "/scott",
    element: <Scott/>,
  },
  {
    path: "/short",
    element: <Short/>,
  },
  {
    path: "/sil",
    element: <Sil/>, 
  }
     ,{
      path: "/snick",
      element: <Snick/>
  },
  {
    path: "/spi",
    element: <Spi/>,
  },
  {
    path: "/suit",
    element: <Suit/>,
  },
  {
    path: "/till",
    element: <Till/>,
  },
  {
    path: "/tip",
    element: <Tip/>,
  },
  {
    path: "/uper",
    element: <Uper/>,
  },
  {
    path: "/vex",
    element: <Vex/>,
  },
  {
    path: "/wet",
    element: <Wet/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");
