import { Button, Form, Input } from "antd";
import { NavLink } from "react-router-dom";
import SignInImg from "../../assets/sign-in.jpg";
import { ISignUp } from "@types";

const Index = () => {
   const onFinish = (values: ISignUp) => {
      console.log("Success:", values);
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
               <Form className="w-[500px]" onFinish={onFinish}>
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
                        htmlType="submit"
                        className="w-full mt-4 bg-[#c2410c] text-white"
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
