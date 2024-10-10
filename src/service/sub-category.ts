import https from "./config";
import { SubCategory } from "@types";

const subCategory: SubCategory = {
   create: (data) => https.post("/sub-category/create", data),
   get: (parentId, params) =>
      https.get(`/sub-category/search/${parentId}`, { params }),
   update: (id, data) => https.patch(`/sub-category/update/${id}`, data),
   delete: (id) => https.delete(`/sub-category/delete/${id}`),
};

export default subCategory;
