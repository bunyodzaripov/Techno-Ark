import { useEffect } from "react";
import { Button, Modal, Form, Input, Select } from "antd";
import { brandCategory } from "@service";
import { openNotification } from "@utils";
import { ModalProps, BrandCategoryValues } from "@types";

const Index = ({
   open,
   handleClose,
   getData,
   update,
   brandsData,
}: ModalProps) => {
   const [form] = Form.useForm();

   useEffect(() => {
      if (update?.id) {
         form.setFieldsValue({
            name: update.name,
            brand_id: update.brand_id,
         });
      } else {
         form.resetFields();
      }
   }, [update, form]);

   const handleSubmit = async (values: BrandCategoryValues) => {
      if (update?.id) {
         try {
            const res = await brandCategory.update(update.id, values);
            if (res.status === 200) {
               handleClose();
               getData();
               openNotification({
                  type: "success",
                  message: "Brand category updated successfully",
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
            const res = await brandCategory.create(values);
            if (res.status === 201) {
               handleClose();
               getData();
               form.resetFields();
               openNotification({
                  type: "success",
                  message: "Brand category created successfully",
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
            title={
               update?.id ? "Update brand category" : "Add new brand category"
            }
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
                  label="Brand category name"
                  name="name"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  rules={[
                     {
                        required: true,
                        message: "Please input brand category name!",
                     },
                  ]}
               >
                  <Input />
               </Form.Item>
               <Form.Item
                  label="Brands"
                  name="brand_id"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  rules={[
                     {
                        required: true,
                        message: "Please select category!",
                     },
                  ]}
               >
                  <Select allowClear showSearch placeholder="Select a Brands">
                     {brandsData?.map((item, index) => (
                        <Select.Option value={item.id} key={index}>
                           {item.name}
                        </Select.Option>
                     ))}
                  </Select>
               </Form.Item>
            </Form>
         </Modal>
      </>
   );
};

export default Index;
