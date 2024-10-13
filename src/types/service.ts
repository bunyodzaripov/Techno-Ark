import { SignIn, SignUp } from "./auth";

//////////////////////// Params ////////////////////////
interface Params {
   page?: number;
   limit?: number;
   search?: string;
}

interface SubData {
   name: string;
   parent_category_id?: number;
}

interface BrandUpdate {
   name: string;
   description: string;
   categoryId: number;
}

interface BrandCategoryValues {
   name: string;
   brand_id: number;
}

//////////////////////// Services ////////////////////////

export interface Category {
   create: (data: string) => Promise<any>;
   get: (params: Params) => Promise<any>;
   update: (id: number, data: string) => Promise<any>;
   delete: (id: number) => Promise<any>;
}

export interface Auth {
   sign_in: (data: SignIn) => Promise<any>;
   sign_up: (data: SignUp) => Promise<any>;
}

export interface SubCategory {
   create: (data: SubData) => Promise<any>;
   get: (pardentId: number, params: Params) => Promise<any>;
   update: (id: number, data: SubData) => Promise<any>;
   delete: (id: number) => Promise<any>;
}

export interface Brands {
   create: (data: string) => Promise<any>;
   get: (params: Params) => Promise<any>;
   update: (id: number, data: BrandUpdate) => Promise<any>;
   delete: (id: number) => Promise<any>;
   getCategory: (id: number) => Promise<any>;
}

export interface BrandCategory {
   create: (data: BrandCategoryValues) => Promise<any>;
   get: (params: Params) => Promise<any>;
   update: (id: number, data: BrandCategoryValues) => Promise<any>;
   delete: (id: number) => Promise<any>;
   getBrand: (id: number) => Promise<any>;
}

export interface Products {
   create: (data: string) => Promise<any>;
   get: (params: Params) => Promise<any>;
   getOne: (id: number) => Promise<any>;
   update: (id: number, data: string) => Promise<any>;
   delete: (id: number) => Promise<any>;
}
