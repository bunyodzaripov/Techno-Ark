////////////////////////  Auth ///////////////

export interface ISignIn {
   phone_number: string;
   password: string;
}

export interface ISignUp extends ISignIn {
   first_name: string;
   last_name: string;
   email: string;
}

export interface IAuthReaquest {
   sign_in: (data: ISignIn) => Promise<any>;
   sign_up: (data: ISignUp) => Promise<any>;
}

/////////////////////////  Notifications ///////////////
export type NotificationType = {
   type: "success" | "info" | "warning" | "error";
   message?: string;
   description?: string;
   placement?: "topRight" | "topLeft" | "bottomRight" | "bottomLeft";
};

//////////////////////////  Category ///////////////
export interface params {
   page?: number;
   limit?: number;
   search?: string;
}

export interface Category {
   create: (data: string) => Promise<any>;
   get: (params: params) => Promise<any>;
   update: (id: number, data: string) => Promise<any>;
   delete: (id: number) => Promise<any>;
}
