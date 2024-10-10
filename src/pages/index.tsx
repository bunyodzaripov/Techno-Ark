import { Suspense } from "react";
import { Loading } from "@components";

import SignIn from "./sign-in";
import SignUp from "./sign-up";
import AdminLayout from "./admin-layout";
import Products from "./products";
import Category from "./category";
import SubCategory from "./sub-category";
export { SignIn, SignUp, AdminLayout, Products, Category, SubCategory };

export const CategoryPage = () => {
   return (
      <Suspense fallback={<Loading />}>
         <Category />
      </Suspense>
   );
};
