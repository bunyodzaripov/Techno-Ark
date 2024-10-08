import { Popconfirm } from "antd";
const Index = ({
   title,
   okText,
   cancelText,
   onConfirm,
   description,
   children,
   placement,
}: any) => {
   return (
      <Popconfirm
         title={title}
         okText={okText}
         cancelText={cancelText}
         onConfirm={onConfirm}
         description={description}
         placement={placement}
      >
         {children}
      </Popconfirm>
   );
};
export default Index;
