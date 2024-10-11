import https from "./config";
import { BrandCategory } from "@types";

const brandCategory: BrandCategory = {
   create: (data) => https.post("/brand-category/create", data),
   get: (params) => https.get("/brand-category/search", { params }),
   update: (id, data) => https.patch(`/brand-category/update/${id}`, data),
   delete: (id) => https.delete(`/brand-category/delete/${id}`),
   getBrand: (id) => https.get(`/brand-category/brand/${id}`),
};

export default brandCategory;
