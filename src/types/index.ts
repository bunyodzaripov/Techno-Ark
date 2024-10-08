////////////////////////  Auth ///////////////

export interface ISignIn {
   phone_number: string;
   password: string;
}

export interface ISignUp extends ISignIn {
   first_name: string;
   last_name: string;
   email: string;
   phone_number: string;
   password: string;
}

export interface IAuthReaquest {
   sign_in: (data: ISignIn) => Promise<any>;
   sign_up: (data: ISignUp) => Promise<any>;
}
