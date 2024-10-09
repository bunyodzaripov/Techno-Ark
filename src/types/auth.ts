export interface SignIn {
   phone_number: string;
   password: string;
}

export interface SignUp extends SignIn {
   first_name: string;
   last_name: string;
   email: string;
}
