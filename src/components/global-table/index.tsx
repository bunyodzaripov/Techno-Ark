import { Table } from "antd";

export default function GlobalTable(props: any) {
   const { columns, dataSource, pagination, handleChange } = props;

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
