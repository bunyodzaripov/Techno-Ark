import { useEffect } from "react";
import { Button, Modal, Form, Input } from "antd";
import { subCategory } from "@service";
import { openNotification } from "@utils";
import { ModalProps } from "@types";

interface values {
   name: string;
   parent_category_id: number;
}

const Index = ({
   open,
   handleClose,
   getData,
   update,
   parentId,
}: ModalProps) => {
   const [form] = Form.useForm();

   useEffect(() => {
      if (update?.id) {
         form.setFieldsValue({
            name: update.name,
         });
      } else {
         form.resetFields();
      }
   }, [update, form]);

   const handleSubmit = async (values: values) => {
      if (update?.id) {
         try {
            const res = await subCategory.update(update.id, {
               name: values.name,
               parent_category_id: parentId,
            });
            if (res.status === 200) {
               handleClose();
               getData();
               openNotification({
                  type: "success",
                  message: "Sub Category updated successfully",
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
            const res = await subCategory.create({
               name: values.name,
               parent_category_id: parentId,
            });
            if (res.status === 201) {
               handleClose();
               getData();
               form.resetFields();
               openNotification({
                  type: "success",
                  message: "Sub Category created successfully",
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
            title={update?.id ? "Update subcategory" : "Add new subcategory"}
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
                  label="Subcategory name"
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
