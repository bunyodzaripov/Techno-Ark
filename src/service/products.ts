import https from "./config";
import { Products } from "@types";

const products: Products = {
   create: (data) => https.post("/products/create", data),
   get: (params) => https.get("/products/search", { params }),
   getOne: (id) => https.get(`/products/${id}`),
   update: (id, data) => https.patch(`/products/update/${id}`, data),
   delete: (id) => https.delete(`/products/delete/${id}`),
};

export default products;
