import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import ErrorPage from "./Components/Pages/ErrorPage/ErrorPage";
import Homepage from "./Components/Pages/HomePage/Homepage";
import AddRoomCategory from "./Components/Pages/AddRoomCategory/AddRoomCategory";
import ViewRoomCategory from "./Components/Pages/ViewRoomCategory/ViewRoomCategory";
import AddCategoryWiseRoom from "./Components/Pages/AddCategoryWiseRoom/AddCategoryWiseRoom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "/AddRoomCategory",
        element: <AddRoomCategory></AddRoomCategory>,
      },
      {
        path: "/AddCategoriesRoom",
        element: <AddCategoryWiseRoom></AddCategoryWiseRoom>,
      },
      {
        path: "/ViewRoomCategory",
        element: <ViewRoomCategory></ViewRoomCategory>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
