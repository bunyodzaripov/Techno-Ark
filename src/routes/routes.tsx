import {
   AppstoreOutlined,
   SettingOutlined,
   StockOutlined,
   ProductOutlined,
   TagOutlined,
   TagsOutlined,
   AppstoreAddOutlined,
} from "@ant-design/icons";

const admin = [
   {
      content: "Products",
      path: "/admin-layout/",
      icon: <ProductOutlined />,
   },
   {
      content: "Category",
      path: "/admin-layout/category",
      icon: <AppstoreOutlined />,
   },
   {
      content: "Brands",
      path: "/admin-layout/brands",
      icon: <TagOutlined />,
   },
   {
      content: "Brand category",
      path: "/admin-layout/brand-category",
      icon: <TagsOutlined />,
   },
   {
      content: "Ads",
      path: "/admin-layout/ads",
      icon: <AppstoreAddOutlined />,
   },
   {
      content: "Stocks",
      path: "/admin-layout/stocks",
      icon: <StockOutlined />,
   },
   {
      content: "Settings",
      path: "/admin-layout/settings",
      icon: <SettingOutlined />,
   },
];

export { admin };
