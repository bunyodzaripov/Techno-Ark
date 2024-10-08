import https from "./config";
import { IAuthReaquest } from "@types";

const auth: IAuthReaquest = {
   sign_in: (data) => https.post("/auth/sign-in", data),
   sign_up: (data) => https.post("/auth/admin/sign-up", data),
};

export default auth;
