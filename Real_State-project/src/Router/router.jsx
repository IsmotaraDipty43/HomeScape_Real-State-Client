import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import Dashbroad from "../Pages/Dashbroad";
import Private from "./Private";
import AdminPropertymanage from "../Pages/AdminPropertymanage";
import ProfileofAdmin from "../Pages/ProfileofAdmin";
import ManageUsers from "../Pages/ManageUsers";
import ManageReviewsAdmin from "../Pages/ManageReviewsAdmin";
import AgentProfile from "../Pages/AgentRoute/AgentProfile";
import AddProperty from "../Pages/AgentRoute/AddProperty";
import MyAddedProperty from "../Pages/AgentRoute/MyAddedProperty";
import UpdateProperty from "../Pages/AgentRoute/UpdateProperty";
import UserProfile from "../Pages/UserRoute/UserProfile";
import AllProperty from "../Pages/AllProperty";
import PropertyDetails from "../Pages/PropertyDetails";
import Wishlist from "../Pages/UserRoute/Wishlist";
import MakeOffer from "../Pages/UserRoute/MakeOffer ";
import MyReviews from "../Pages/UserRoute/MyReviews";
import MyRequestedOfferedProperties from "../Pages/AgentRoute/MyRequestedOfferedProperties";
import PropertyBought from "../Pages/UserRoute/PropertyBought";

import PaymentPage from "../Pages/UserRoute/PaymentPage";
import SoldProperty from "../Pages/AgentRoute/SoldProperty";
import Advertiseproperty from "../Pages/Advertiseproperty";
import AdminRoute from "./AdminRoute";
import ErrorMessage from "../Component/ErrorMessage";
import Aboutus from "../Pages/Aboutus";
import ContactPage from "../Pages/ContactPage";
import State from "../Pages/State";







const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorMessage></ErrorMessage>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/about',
          element:<Aboutus></Aboutus>
        },
        {
          path:'/reg',
          element:<Signup></Signup>
        },
        {
          path:'/contact',
          element:<ContactPage></ContactPage>
        },
        {
          path:'/allProperty',
          element:<Private><AllProperty></AllProperty></Private>
        },
        {
          path:'/property/:id',
          element:<Private><PropertyDetails></PropertyDetails></Private>
        }
      
      ]
      
    },
    {
      path:'/dashbroad',
      element:<Private><Dashbroad></Dashbroad></Private>,
      children:[
        //admin Route
        {
          path:'/dashbroad/profile',
          element:<AdminRoute><ProfileofAdmin></ProfileofAdmin></AdminRoute>
        },
        {
          path:'/dashbroad/manage-properties',
          element:<AdminRoute><AdminPropertymanage></AdminPropertymanage></AdminRoute>
        },
        {
          path:'/dashbroad/manage-users',
          element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>
        },
        {
          path:'/dashbroad/manage-reviews',
          element:<AdminRoute><ManageReviewsAdmin></ManageReviewsAdmin></AdminRoute>
        },
        {
          path:'/dashbroad/sold-properties',
          element:<AdminRoute><SoldProperty></SoldProperty></AdminRoute>
        },
        {
          path:'/dashbroad/Advertiseproperty',
          element:<AdminRoute><Advertiseproperty></Advertiseproperty></AdminRoute>
        },
        {
          path:'/dashbroad/Stats',
          element:<AdminRoute><State></State></AdminRoute>
        },
        //agent routes
        {
          path:'/dashbroad/agent-profile',
          element:<Private><AgentProfile></AgentProfile></Private>
        },
        {
          path:'/dashbroad/add-property',
          element:<Private><AddProperty></AddProperty></Private>
        },
        {
          path:'/dashbroad/my-properties',
          element:<Private><MyAddedProperty></MyAddedProperty></Private>
        },
        {
               path:'/dashbroad/requested-properties',
               element:<Private><MyRequestedOfferedProperties></MyRequestedOfferedProperties></Private>
        },
       
        {
          path:'/dashbroad/my-properties/update-property/:id',
          element:<Private> <UpdateProperty></UpdateProperty></Private>
        },

        //user route
        {
          path:'/dashbroad/my-profile',
          element:<Private><UserProfile></UserProfile></Private>
        },
        {
          path: '/dashbroad/my-reviews',
          element:<Private><MyReviews></MyReviews></Private>
        },
        {
          path:'/dashbroad/wishlist',
          element:<Private><Wishlist></Wishlist></Private>
        },
        {
          path:'/dashbroad/wishlist/make-offer/:propertyId',
          element: <Private><MakeOffer></MakeOffer></Private>
        },
        {
          path:'/dashbroad/property-bought',
          element:<Private><PropertyBought></PropertyBought></Private>
        },
        {
          path:'/dashbroad/property-bought/payment/:propertyId',
          element:<Private> <PaymentPage></PaymentPage></Private>
        },
       
    

        
       
      ]
    },

  
   
  ]);




export default router;