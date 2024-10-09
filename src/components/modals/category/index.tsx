import { useEffect } from "react";
import { Button, Modal, Form, Input } from "antd";
import { category } from "@service";
import { openNotification } from "@utils";
import { props } from "@types";

const Index = ({ open, handleClose, getData, update }: props) => {
   const [form] = Form.useForm();

   useEffect(() => {
      if (update?.id) {
         form.setFieldsValue(update);
      } else {
         form.resetFields();
      }
   }, [update, form]);

   const handleSubmit = async (values: string) => {
      if (update?.id) {
         try {
            const res = await category.update(update.id, values);
            if (res.status === 200) {
               handleClose();
               getData();
               openNotification({
                  type: "success",
                  message: "Category updated successfully",
               });
            }
         } catch (error) {
            openNotification({
               type: "error",
               message: "Something went wrong",
            });
            console.log(error);
         }
      } else {
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
      }
   };

   return (
      <>
         <Modal
            open={open}
            title={update?.id ? "Update category" : "Add new category"}
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
                     {update?.id ? "Update" : "Submit"}
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
