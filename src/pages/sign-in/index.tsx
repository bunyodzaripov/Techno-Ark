import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import SignInImg from "../../assets/sign-in.jpg";
import { auth } from "@service";
import { openNotification } from "@utils";
import { SignIn } from "@types";

const Index = () => {
   const navigate = useNavigate();

   const handleSubmit = async (values: SignIn) => {
      try {
         const res = await auth.sign_in(values);
         let access_token = res?.data?.data.tokens.access_token;
         let userId = res?.data?.data?.data?.id;
         localStorage.setItem("access_token", access_token);
         localStorage.setItem("userId", userId);
         if (res.status === 201) {
            openNotification({
               type: "success",
               message: "Sign in successfully",
               description: "You have successfully signed in",
            });
            navigate("/admin-layout");
         }
      } catch (error: any) {
         if (error.response) {
            if (error.response.status === 400) {
               openNotification({
                  type: "error",
                  message: "Sign in failed",
                  description: "Login or password is incorrect",
               });
            } else {
               openNotification({
                  type: "error",
                  message: "Server error",
                  description: "Server error please try again",
               });
            }
         } else {
            console.log(error);
         }
      }
   };

   return (
      <div className="w-[100%] h-[100vh] flex  container mx-auto">
         <div className="w-[50%] flex justify-center items-center">
            <img className="w-50" src={SignInImg} alt="sign-in" />
         </div>
         <div className="w-[50%] flex justify-center items-center">
            <div>
               <h1 className="text-3xl font-semibold mb-4  text-[#c2410c]">
                  Login
               </h1>
               <Form className="w-[300px]" name="basic" onFinish={handleSubmit}>
                  <Form.Item
                     label="Phone number"
                     name="phone_number"
                     labelCol={{
                        span: 24,
                     }}
                     wrapperCol={{
                        span: 24,
                     }}
                     rules={[
                        {
                           required: true,
                           message: "Please input your phone number!",
                        },
                     ]}
                  >
                     <Input className="py-2" allowClear />
                  </Form.Item>

                  <Form.Item
                     label="Password"
                     name="password"
                     labelCol={{
                        span: 24,
                     }}
                     wrapperCol={{
                        span: 24,
                     }}
                     rules={[
                        {
                           required: true,
                           message: "Please input your password!",
                        },
                     ]}
                  >
                     <Input.Password className="py-2" allowClear showCount />
                  </Form.Item>

                  <Form.Item
                     wrapperCol={{
                        span: 24,
                     }}
                  >
                     <Button
                        type="primary"
                        htmlType="submit"
                        className="w-full mt-"
                        size="large"
                     >
                        Submit
                     </Button>
                  </Form.Item>
                  <div className="flex justify-between items-center">
                     <p className="text-sm text-gray-500">
                        Don't have an account?
                     </p>
                     <Link
                        to="/sign-up"
                        className={"text-[#c2410c] bold text-lg"}
                     >
                        Register
                     </Link>
                  </div>
               </Form>
            </div>
         </div>
      </div>
   );
};

export default Index;
