import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Input } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { GlobalTable, Popconfirm } from "@components";
import { category } from "@service";
import { Category } from "@modals";
import { openNotification } from "@utils";

const Index = () => {
   const [open, setOpen] = useState(false);
   const [data, setData] = useState([]);
   const [total, setTotal] = useState();
   const [params, setParams] = useState({
      page: 1,
      limit: 5,
      search: "",
   });
   const { search } = useLocation();
   const navigate = useNavigate();

   useEffect(() => {
      getData();
   }, [params]);
   useEffect(() => {
      const params = new URLSearchParams(search);
      const page = Number(params.get("page")) || 1;
      const limit = Number(params.get("limit")) || 5;
      const search_val = params.get("search") || "";
      setParams((prev) => ({
         ...prev,
         search: search_val,
         page: page,
         limit: limit,
      }));
   }, [search]);

   const openModal = () => {
      setOpen(true);
   };
   const handleClose = () => {
      setOpen(false);
   };
   const getData = async () => {
      const res = await category.get(params);
      if (res.status === 200) {
         setTotal(res.data?.data?.count);
         setData(res.data?.data?.categories);
      }
   };
   const deleteData = async (id: number) => {
      try {
         const res = await category.delete(id);
         if (res.status === 200) {
            getData();
            openNotification({
               type: "success",
               message: "Category deleted successfully",
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
   const handleTableChange = (pagination: any) => {
      const { current, pageSize } = pagination;
      setParams((prev) => ({
         ...prev,
         page: current,
         limit: pageSize,
      }));
      const current_params = new URLSearchParams(search);
      current_params.set("page", `${current}`);
      current_params.set("limit", `${pageSize}`);
      navigate(`?${current_params}`);
   };
   const handleSearch = (event: any) => {
      setParams((prev) => ({
         ...prev,
         search: event.target.value,
      }));
      const search_params = new URLSearchParams(search);
      search_params.set("search", event.target.value);
      navigate(`?${search_params}`);
   };

   const columns = [
      {
         title: "No",
         dataIndex: "no",
         key: "no",
         render: (_: any, __: any, index: number) =>
            (params.page - 1) * params.limit + index + 1,
      },
      {
         title: "Name",
         dataIndex: "name",
         key: "name",
      },
      {
         title: "Action",
         dataIndex: "action",
         key: "action",
         render: (_: any, record: any) => (
            <div>
               <Popconfirm
                  title="Delete category?"
                  description="Are you sure to delete this category?"
                  okText="Yes"
                  cancelText="No"
                  onConfirm={() => deleteData(record.id)}
               >
                  <Button>
                     <DeleteOutlined />
                  </Button>
               </Popconfirm>
            </div>
         ),
      },
   ];

   return (
      <>
         <Category open={open} handleClose={handleClose} getData={getData} />
         <div className="flex justify-between mb-10">
            <Input
               placeholder="Search category..."
               className="w-[300px]"
               onChange={handleSearch}
               allowClear
            />
            <Button
               type="primary"
               onClick={openModal}
               className="rounded-lg px-4 py-5"
            >
               <span className="ml-2">Add category</span>
            </Button>
         </div>

         <GlobalTable
            columns={columns}
            dataSource={data}
            pagination={{
               current: params.page,
               pageSize: params.limit,
               total: total,
               showSizeChanger: true,
               pageSizeOptions: [3, 5, 10, 20],
            }}
            handleChange={handleTableChange}
         />
      </>
   );
};

export default Index;
