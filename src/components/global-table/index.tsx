import { Table } from "antd";

export default function GlobalTable({
   columns,
   dataSource,
   pagination,
   handleChange,
}: any) {
   return (
      <Table
         columns={columns}
         dataSource={dataSource}
         pagination={pagination}
         onChange={(pagination) => handleChange(pagination)}
         bordered
      />
   );
}
