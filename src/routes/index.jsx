import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/index";
import Login from './../pages/Login/index';
import List from './../pages/List/index';
import Single from './../pages/Single/index';
import New from './../pages/New/index';

const Router = () => {
  return (
    <Routes>
      <Route path={PATHS.HOME}>
        <Route index element={<Home />} />
        <Route path={PATHS.LOGIN} element={<Login />} />
        <Route path={PATHS.USERS}>
          <Route index element={<List />} />
          <Route path={PATHS.NEW} element={<New />} />
          <Route path=":userId" element={<Single />} />
        </Route>
        <Route path={PATHS.PRODUCTS}>
          <Route index element={<List />} />
          <Route path={PATHS.NEW} element={<New />} />
          <Route path=":productId" element={<Single />} />
        </Route>
      </Route>
      <Route path="*" element={<h1>Page not Found</h1>} />
    </Routes>
  )

}

export default Router;

export const PATHS = {
  HOME: "/",
  LOGIN: "login",
  USERS: "users",
  NEW: "new",
  PRODUCTS:"products"
};