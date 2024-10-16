import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Tooltip } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { GlobalTable, Popconfirm, GlobalSearch } from "@components";
import { brands, brandCategory } from "@service";
import { BrandCategory } from "@modals";
import { openNotification } from "@utils";
import { Record, Update, Pagination } from "@types";
const initialValue = {
   id: 0,
   name: "",
   description: "",
   categoryId: 0,
   category_id: 0,
};

const Index = () => {
   const [open, setOpen] = useState(false);
   const [data, setData] = useState([]);
   const [total, setTotal] = useState();
   const [update, setUpdate] = useState<Update>(initialValue);
   const [brandsData, setBrandsData] = useState([]);
   const [params, setParams] = useState({
      search: "",
      limit: 5,
      page: 1,
   });
   const { search } = useLocation();
   const navigate = useNavigate();

   useEffect(() => {
      getData();
      getBrand();
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
      setUpdate(initialValue);
   };
   const getData = async () => {
      const res = await brandCategory.get(params);
      if (res.status === 200) {
         setData(res.data?.data?.brandCategories);
         setTotal(res.data?.data?.count);
      }
   };
   const deleteData = async (id: number) => {
      try {
         const res = await brandCategory.delete(id);
         if (res.status === 200) {
            getData();
            openNotification({
               type: "success",
               message: "Brand Category deleted successfully",
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
   const editData = (data: Record) => {
      setUpdate(data);
      openModal();
   };
   const getBrand = async () => {
      const res = await brands.get({});
      if (res.status === 200) {
         setBrandsData(res?.data?.data?.brands);
      }
   };
   const handleTableChange = (pagination: Pagination) => {
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
   const handleSearch = (value: string) => {
      setParams((prev) => ({
         ...prev,
         search: value,
      }));
   };

   const columns = [
      {
         title: "No",
         dataIndex: "no",
         key: "no",
         render: (_: string, __: Record, index: number) =>
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
         render: (_: string, record: Record) => (
            <div className="flex gap-6">
               <Popconfirm
                  title="Delete brand category?"
                  description="Are you sure to delete this brand category?"
                  okText="Yes"
                  cancelText="No"
                  onConfirm={() => deleteData(record.id)}
               >
                  <Tooltip title="Delete" color="#c2410c">
                     <Button>
                        <DeleteOutlined />
                     </Button>
                  </Tooltip>
               </Popconfirm>
               <Tooltip title="Edit" color="#c2410c">
                  <Button onClick={() => editData(record)}>
                     <EditOutlined />
                  </Button>
               </Tooltip>
            </div>
         ),
      },
   ];

   return (
      <>
         <BrandCategory
            open={open}
            handleClose={handleClose}
            update={update}
            getData={getData}
            brandsData={brandsData}
         />
         <div className="flex justify-between mb-10">
            <GlobalSearch
               placeholder="Search Brand Category..."
               searchParamKey="search"
               onSearch={handleSearch}
            />
            <Button
               type="primary"
               onClick={openModal}
               className="rounded-lg px-4 py-5"
            >
               <span className="ml-2">Add Brand Category</span>
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
