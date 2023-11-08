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
import SeparateCategoryRoom from "./Components/Pages/SeparateCategoryRoom/SeparateCategoryRoom";
import RoomDetailsPage from "./Components/Pages/RoomDetailsPage/RoomDetailsPage";
import UpdateRoomDetails from "./Components/Pages/UpdateRoomDetails/UpdateRoomDetails";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import SignInPage from "./Components/Pages/SignInPage/SignInPage";
import SignUpPage from "./Components/Pages/SignUpPage/SignUpPage";
import RoomPage from "./Components/Pages/RoomPage/RoomPage";
import MyBookingPage from "./Components/Pages/MyBookingPage/MyBookingPage";
import BookingForm from "./Components/Pages/BookingForm/BookingForm";

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
        element: (
          <PrivateRoute>
            <AddRoomCategory></AddRoomCategory>
          </PrivateRoute>
        ),
      },
      {
        path: "/AddCategoriesRoom",
        element: (
          <PrivateRoute>
            <AddCategoryWiseRoom></AddCategoryWiseRoom>
          </PrivateRoute>
        ),
      },
      {
        path: "/ViewRoomCategory",
        element: (
          <PrivateRoute>
            <ViewRoomCategory></ViewRoomCategory>
          </PrivateRoute>
        ),
      },
      {
        path: "/SeparateRooms/:category",
        element: <SeparateCategoryRoom></SeparateCategoryRoom>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allRooms/${params.category}`),
      },
      {
        path: "/roomDetails/:category/:id",
        element: (
          <PrivateRoute>
            <RoomDetailsPage></RoomDetailsPage>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/allRooms/${params.category}/${params.id}`
          ),
      },
      {
        path: "/updateRoomDetails/:category/:id",
        element: (
          <PrivateRoute>
            <UpdateRoomDetails></UpdateRoomDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/allRooms/${params.category}/${params.id}`
          ),
      },
      {
        path: "/signIn",
        element: <SignInPage></SignInPage>,
      },

      {
        path: "/signUp",
        element: <SignUpPage></SignUpPage>,
      },
      {
        path: "/rooms",
        element: <RoomPage></RoomPage>,
      },
      {
        path: "/myCart",
        element: <MyBookingPage></MyBookingPage>,
        loader: () => fetch("http://localhost:5000/Cart"),
      },
      {
        path: "bookingForm",
        element: <BookingForm></BookingForm>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
