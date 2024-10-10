import {
   createBrowserRouter,
   createRoutesFromElements,
   Route,
   RouterProvider,
} from "react-router-dom";
import App from "../App";
import {
   SignIn,
   SignUp,
   AdminLayout,
   Products,
   SubCategory,
   Category,
   Brands,
} from "@pages";

const Index = () => {
   const router = createBrowserRouter(
      createRoutesFromElements(
         <Route path="/" element={<App />}>
            <Route index element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/admin-layout" element={<AdminLayout />}>
               <Route index element={<Products />} />
               <Route path="category" element={<Category />} />
               <Route path="category/:id" element={<SubCategory />} />
               <Route path="brands" element={<Brands />} />
            </Route>
         </Route>
      )
   );

   return <RouterProvider router={router} />;
};

export default Index;
