import {
    createBrowserRouter
} from "react-router-dom";
import Root from "../MainLayouts/Root";
import Home from "../Pages/Home";
import SingIn from "../Pages/SingIn";
import ErrorPage from "../Pages/ErrorPage";
import AddProduct from "../Pages/AddProduct";
import RegisterPage from "../Pages/RegisterPage";
import MyCart from "../Pages/MyCart";
import ProductDetails from "../Pages/ProductDetails";
import { baseUrl } from "../Utilitis/url";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "/signIn",
                element: <SingIn></SingIn>
            },
            {
                path: "/addProduct",
                element: <AddProduct update={false}></AddProduct>
            },
            {
                path: "/updateProduct/:id",
                element: <AddProduct update={true}></AddProduct>,
                loader: ({ params }) => fetch(`${baseUrl}/product/${params.id}`)
            },
            {
                path: "/myCart",
                element: <MyCart></MyCart>
            },
            {
                path: "/register",
                element: <RegisterPage></RegisterPage>
            },
            {
                path: "/productDetails/:id",
                element: <ProductDetails></ProductDetails>
            }
        ]
    },
]);

export default router;