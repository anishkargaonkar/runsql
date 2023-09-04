import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import { Header, Content, Footer } from "antd/es/layout/layout";
import React from "react";
import SQLInput from "./SQLInput";

// type Props = Object;
const Dashboard: React.FC = () => {
  return (
    <Layout>
      <Sider style={siderStyle}>Sider</Sider>
      <Layout>
        <Header style={headerStyle}></Header>
        <Content style={contentStyle}>
          <SQLInput />
        </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Layout>
  );
};

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: "4rem",
  lineHeight: "64px",
  backgroundColor: "#7dbcea"
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  height: "calc(100vh - 4rem - 4rem)",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#108ee9"
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9"
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
  height: "4rem"
};

export { Dashboard };
