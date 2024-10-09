import { useState } from "react";
import { Button, Layout, Menu, theme } from "antd";
import {
   MenuFoldOutlined,
   MenuUnfoldOutlined,
   LogoutOutlined,
} from "@ant-design/icons";
import { admin } from "../../routes/routes";
import { NavLink, useNavigate, useLocation, Outlet } from "react-router-dom";
import { Popconfirm } from "@components";
import Logo from "../../assets/logo-ark.svg";
const { Header, Sider, Content } = Layout;

const App = () => {
   const [collapsed, setCollapsed] = useState(false);
   const { pathname } = useLocation();
   const navigate = useNavigate();
   const {
      token: { colorBgContainer, borderRadiusLG },
   } = theme.useToken();
   return (
      <Layout>
         <Sider trigger={null} collapsible collapsed={collapsed}>
            <div
               style={{
                  width: "100%",
                  height: "64px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  marginBottom: "10px",
               }}
            >
               <img className="w-[40px]" src={Logo} alt="logo" />
               {!collapsed && (
                  <h1
                     style={{
                        color: "#fff",
                        fontSize: "20px",
                        fontWeight: "semibold",
                        marginLeft: "20px",
                     }}
                  >
                     TechnoArk
                  </h1>
               )}
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[pathname]}>
               {admin.map((item) => (
                  <Menu.Item key={item.path} icon={item.icon}>
                     <NavLink to={item.path}>{item.content}</NavLink>
                  </Menu.Item>
               ))}
            </Menu>
         </Sider>
         <Layout>
            <Header
               className="!py-0 !px-4"
               style={{
                  padding: 0,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
               }}
            >
               <Button
                  type="text"
                  icon={
                     collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                  }
                  onClick={() => setCollapsed(!collapsed)}
                  style={{
                     fontSize: "16px",
                     width: 64,
                     height: 64,
                     color: "#fff",
                  }}
               />

               <Popconfirm
                  title="Logout"
                  description="Are you sure to logout?"
                  okText="Yes"
                  cancelText="No"
                  onConfirm={() => {
                     localStorage.removeItem("token");
                     navigate("/");
                  }}
                  placement="leftBottom"
               >
                  <Button
                     type="text"
                     icon={<LogoutOutlined />}
                     style={{
                        fontSize: "16px",
                        width: 64,
                        height: 64,
                        color: "#fff",
                     }}
                  />
               </Popconfirm>
            </Header>
            <Content
               style={{
                  margin: "24px 16px",
                  padding: 24,
                  minHeight: "calc(100vh - 64px)",
                  background: colorBgContainer,
                  borderRadius: borderRadiusLG,
                  overflow: "auto",
               }}
            >
               <Outlet />
            </Content>
         </Layout>
      </Layout>
   );
};
export default App;
