import { Button, Form, Input } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import SignInImg from "../../assets/sign-in.jpg";
import { ISignUp } from "@types";
import { auth } from "@service";
import { openNotification } from "@utils";

const Index = () => {
   const navigate = useNavigate();

   const handleSubmit = async (values: ISignUp) => {
      try {
         const res = await auth.sign_up(values);
         if (res.status === 201) {
            let access_token = res?.data?.data.tokens.access_token;
            let userId = res?.data?.data?.data?.id;
            localStorage.setItem("access_token", access_token);
            localStorage.setItem("userId", userId);
            navigate("/admin-layout");
            openNotification({
               type: "success",
               message: "Sign up successfully",
               description: "You have successfully signed up",
            });
         }
      } catch (error: any) {
         if (error.response) {
            if (error.response.status === 400) {
               openNotification({
                  type: "error",
                  message: "Sign up failed",
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
      <div className="w-[100%] flex container mx-auto">
         <div className="w-[50%] flex justify-center items-center">
            <img src={SignInImg} alt="sign-up" />
         </div>
         <div className="w-[50%] flex justify-center items-center">
            <div>
               <h1 className="text-3xl font-semibold mb-4 text-[#c2410c]">
                  Register
               </h1>
               <Form className="w-[400px]" onFinish={handleSubmit}>
                  <Form.Item
                     label="First name"
                     name="first_name"
                     labelCol={{
                        span: 24,
                     }}
                     rules={[
                        {
                           required: true,
                           message: "Please input your first name!",
                        },
                     ]}
                  >
                     <Input className="py-2" allowClear />
                  </Form.Item>

                  <Form.Item
                     label="Last name"
                     name="last_name"
                     labelCol={{
                        span: 24,
                     }}
                     rules={[
                        {
                           required: true,
                           message: "Please input your last name!",
                        },
                     ]}
                  >
                     <Input className="py-2" allowClear />
                  </Form.Item>

                  <Form.Item
                     label="Phone number"
                     name="phone_number"
                     labelCol={{
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
                     label="Email"
                     name="email"
                     labelCol={{
                        span: 24,
                     }}
                     rules={[
                        {
                           required: true,
                           message: "Please input your email!",
                        },
                        {
                           type: "email",
                           message: "Please enter a valid email!",
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
                        Already have an account?
                     </p>
                     <NavLink to="/" className={"text-[#c2410c] bold text-lg"}>
                        Sign In
                     </NavLink>
                  </div>
               </Form>
            </div>
         </div>
      </div>
   );
};

export default Index;
