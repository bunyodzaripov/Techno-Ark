import { useEffect, useState } from "react";
import { Button, Modal, Form, Input, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { brands } from "@service";
import { openNotification } from "@utils";
import { ModalProps } from "@types";

interface BrandValues {
   name: string;
   description: string;
   categoryId: string;
   file: string | File;
}

const Index = ({
   open,
   handleClose,
   getData,
   update,
   categories,
}: ModalProps) => {
   const [form] = Form.useForm();
   const [file, setFile] = useState<string | File>("");

   useEffect(() => {
      if (update?.id) {
         form.setFieldsValue({
            name: update.name,
         });
      } else {
         form.resetFields();
      }
   }, [update, form]);

   const handleChange = (e: any) => {
      let fileData = e.target.files[0];
      setFile(fileData);
   };

   const handleSubmit = async (values: BrandValues) => {
      console.log(values, "values brands");

      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("categoryId", values.categoryId);
      formData.append("description", values.description);
      formData.append("file", file);
      if (update?.id) {
         try {
            const res = await brands.update(update.id, values);
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
            const res = await brands.create(formData);
            if (res.status === 201) {
               handleClose();
               getData();
               form.resetFields();
               openNotification({
                  type: "success",
                  message: "Brand created successfully",
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
            title={update?.id ? "Update brand" : "Add new brand"}
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
                  label="Brand name"
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
               <Form.Item
                  label="Category"
                  name="categoryId"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  rules={[
                     {
                        required: true,
                        message: "Please select category!",
                     },
                  ]}
               >
                  <Select allowClear showSearch placeholder="Select a Category">
                     {categories?.map((item, index) => (
                        <Select.Option value={item.id} key={index}>
                           {item.name}
                        </Select.Option>
                     ))}
                  </Select>
               </Form.Item>
               <Form.Item
                  label="Description"
                  name="description"
                  labelCol={{ span: 24 }}
                  wrapperCol={{ span: 24 }}
                  rules={[
                     {
                        required: true,
                        message: "Please input description!",
                     },
                  ]}
               >
                  <Input.TextArea allowClear />
               </Form.Item>
               {!update.id && (
                  <Form.Item
                     label="Brand logo"
                     name="file"
                     labelCol={{ span: 24 }}
                     wrapperCol={{ span: 24 }}
                     rules={[
                        {
                           required: true,
                           message: "Please upload brand logo!",
                        },
                     ]}
                  >
                     <Input type="file" onChange={handleChange} />
                  </Form.Item>
               )}
            </Form>
         </Modal>
      </>
   );
};

export default Index;
