import { Route, Routes } from "react-router-dom";
import React from "react";
import SiteConfigration from "../pages/admin/dashboard/siteconfigration";
import Users from "../pages/admin/users";
import Roles from "../pages/admin/users/roles";
import Error404 from "../common/components/error_code/404";
import Products from "../pages/admin/ecommerce/products";
import Resources from "../pages/admin/ecommerce/resources";
import Coupons from "../pages/admin/ecommerce/coupons";
import Subscriptions from "../pages/admin/ecommerce/subscriptions";
import Orders from "../pages/admin/ecommerce/orders";
import EditEmailContent from "../common/components/admin/edit_email_content";
import AddUser from "../pages/admin/users/adduser";
import AddProduct from "../pages/admin/ecommerce/products/addproduct";
import EditProduct from "../pages/admin/ecommerce/products/editproduct";
import EditUser from "../pages/admin/users/edituser";
import ViewDetail from "../pages/admin/users/details";
import ViewpProductDetail from "../pages/admin/ecommerce/products/productdetails";
import AddCoupon from "../pages/admin/ecommerce/coupons/addcoupon";
import ViewCouponDetail from "../pages/admin/ecommerce/coupons/coupondetails";
import EditCoupon from "../pages/admin/ecommerce/coupons/editcoupon";
import Addsubscription from "../pages/admin/ecommerce/subscriptions/addsubscription";
import Editsubscription from "../pages/admin/ecommerce/subscriptions/editsubscription";
import SubscriptionDetails from "../pages/admin/ecommerce/subscriptions/subscriptiondetails";
import AddResources from "../pages/admin/ecommerce/resources/addresource";
import EditResources from "../pages/admin/ecommerce/resources/editresource";
import ResourcesDetails from "../pages/admin/ecommerce/resources/resourcedetails";
import OrderDetail from "../pages/admin/ecommerce/orders/orderdetails";
import Login from "../pages/auth/login";

const Routing = () => {
  return (
    <Routes>
      {/* site configration section routes */}
      <Route path="/admin/dashboard/siteconfigration" element={<SiteConfigration />} />
      <Route path="/admin/dashboard/siteconfigration" element={<SiteConfigration />} />
      <Route path="/admin/siteconfigration/editemailcontent/:id" element={<EditEmailContent />} />
      {/* user section routes */}
      <Route path="/admin/users" element={<Users />} />
      <Route path="/admin/user/roles" element={<Roles />} />
      <Route path="/admin/user/adduser" element={<AddUser />} />
      <Route path="/admin/user/edituser/:id" element={<EditUser />} />
      {/* product section routes */}
      <Route path="/admin/users" element={<Users />} />
      <Route path="/admin/user/roles" element={<Roles />} />
      <Route path="/admin/user/adduser" element={<AddUser />} />
      <Route path="/admin/user/edituser/:id" element={<AddUser />} />
      <Route path="/admin/user/details" element={<ViewDetail />} />
      {/* product section routes */}
      <Route path="/admin/ecommerce/products" element={<Products />} />
      <Route path="/admin/ecommerce/products/addproduct" element={<AddProduct />} />
      <Route path="//admin/ecommerce/products/editproduct/:id" element={<EditProduct />} />
      <Route path="/admin/ecommerce/products/productdetails/:id" element={<ViewpProductDetail />} />
      {/* Coupon section routes */}
      <Route path="/admin/ecommerce/coupons" element={<Coupons />} />
      <Route path="/admin/ecommerce/coupons/addcoupon" element={<AddCoupon />} />
      <Route path="/admin/ecommerce/coupons/editcoupon/:id" element={<EditCoupon />} />
      <Route path="/admin/ecommerce/coupons/coupondetails/:id" element={<ViewCouponDetail />} />
      {/* resources section routes */}
      <Route path="/admin/ecommerce/resources" element={<Resources />} />
      <Route path="/admin/ecommerce/addresources" element={<AddResources />} />
      <Route path="/admin/ecommerce/editresources/:id" element={<EditResources />} />
      <Route path="/admin/ecommerce/resourcesdetails/:id" element={<ResourcesDetails />} />
      {/* subscription section routes */}
      <Route path="/admin/ecommerce/subscriptions" element={<Subscriptions />} />
      <Route path="/admin/ecommerce/addsubscription" element={<Addsubscription />} />
      <Route path="/admin/ecommerce/editsubscription/:id" element={<Editsubscription />} />
      <Route path="/admin/ecommerce/subscriptiondetails/:id" element={<SubscriptionDetails />} />
      {/* order section routes */}
      <Route path="/admin/ecommerce/orders" element={<Orders />} />
      <Route path="admin/ecommerce/orders/orderdetails/:id" element={<OrderDetail />} />
      {/* Auth pages routes */}
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default Routing;
