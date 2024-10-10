import { SignIn, SignUp } from "./auth";

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
