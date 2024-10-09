import {
   AppstoreOutlined,
   SettingOutlined,
   StockOutlined,
   ProductOutlined,
} from "@ant-design/icons";

const admin = [
   {
      content: "Products",
      path: "/admin-layout/",
      icon: <ProductOutlined />,
   },
   {
      content: "Categorys",
      path: "/admin-layout/category",
      icon: <AppstoreOutlined />,
   },
   {
      content: "Brands",
      path: "/admin-layout/brands",
      icon: <AppstoreOutlined />,
   },
   {
      content: "Brand categories",
      path: "/admin-layout/brand-categories",
      icon: <AppstoreOutlined />,
   },
   {
      content: "Ads",
      path: "/admin-layout/ads",
      icon: <AppstoreOutlined />,
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
