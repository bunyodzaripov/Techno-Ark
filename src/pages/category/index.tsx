import { Button, Input } from "antd";
import { GlobalTable } from "@components";

const Index = () => {
   const openModal = () => {
      console.log("openModal");
   };
   const handleSearch = (e: any) => {
      console.log(e.target.value);
   };

   const columns = [
      {
         title: "No.",
         dataIndex: "id",
         key: "id",
      },
      {
         title: "Name",
         dataIndex: "name",
         key: "name",
      },
   ];

   const data = [
      {
         id: 1,
         name: "Category 1",
      },
      {
         id: 2,
         name: "Category 2",
      },
      {
         id: 3,
         name: "Category 3",
      },
   ];
   return (
      <>
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
         <GlobalTable columns={columns} dataSource={data} />
      </>
   );
};

export default Index;
