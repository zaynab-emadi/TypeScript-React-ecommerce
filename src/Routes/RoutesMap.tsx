import {Route, Routes} from "react-router-dom";
import Home from "../Pages/Customer side/Home";
import Cart from "../Pages/Customer side/Cart";
import PaymentResult from "../Pages/Customer side/PaymentResult";
import CustomerInfo from "../Pages/Customer side/CustomerInfo";
import OrderSubmit from "../Pages/Customer side/OrderSubmit";
import Categories from "../Pages/Customer side/Categories";
import ProductDetails from "../Pages/Customer side/ProductDetails";
import Orders from "../Pages/Admin panel/Orders";
import ProductsList from "../Pages/Admin panel/ProductsList";
import AdminLogin from "../Pages/Admin panel/AdminLogin";
import AdminDashboard from "../Pages/Admin panel/AdminDashboard";
import Stock from "../Pages/Admin panel/Stock";
import PageNotFound from "../Pages/Page not found/PageNotFound";

function RoutesMap() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Home />}>
                    <Route path={"cart"} element={<Cart />} />
                    <Route path={"payment-result"} element={<PaymentResult />} />
                    <Route path={"account"} element={<CustomerInfo />} />
                    <Route path={"orderSubmit"} element={<OrderSubmit />} />
                    <Route path={"categories"} element={<Categories />}>
                        <Route path={":productId"} element={<ProductDetails />}></Route>
                    </Route>
                </Route>
                <Route path={"admin-login"} element={<AdminLogin />} />
                <Route path={"Admin-dashboard"} element={<AdminDashboard />}>
                    <Route path={"orders"} element={<Orders />} />
                    <Route path={"products-list"} element={<ProductsList />} />
                    <Route path={"stock"} element={<Stock />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
}

export default RoutesMap;