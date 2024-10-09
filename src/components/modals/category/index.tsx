import { Button, Modal, Form, Input } from "antd";
import { category } from "@service";
import { openNotification } from "@utils";

const Index = ({ open, handleClose, getData }: any) => {
   const [form] = Form.useForm();

   const handleSubmit = async (values: string) => {
      try {
         const res = await category.create(values);
         if (res.status === 201) {
            handleClose();
            getData();
            form.resetFields();
            openNotification({
               type: "success",
               message: "Category created successfully",
            });
         }
      } catch (error) {
         openNotification({
            type: "error",
            message: "Something went wrong",
         });
         console.log(error);
      }
   };

   return (
      <>
         <Modal
            open={open}
            title="Add new category"
            onCancel={handleClose}
            width={500}
            footer={
               <div
                  style={{
                     display: "flex",
                     justifyContent: "flex-start",
                     gap: "10px",
                  }}
               >
                  <Button type="primary" form="basic" htmlType="submit">
                     Add
                  </Button>
                  <Button onClick={handleClose}>Cancel</Button>
               </div>
            }
         >
            <Form form={form} id="basic" name="basic" onFinish={handleSubmit}>
               <Form.Item
                  label="Category name"
                  name="name"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  rules={[
                     {
                        required: true,
                        message: "Please input category name!",
                     },
                  ]}
               >
                  <Input />
               </Form.Item>
            </Form>
         </Modal>
      </>
   );
};

export default Index;
