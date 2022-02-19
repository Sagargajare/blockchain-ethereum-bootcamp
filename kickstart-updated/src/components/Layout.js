import React from 'react'
import { Container} from 'semantic-ui-react'
import Header from './Header';
import Head from "next/head";
import { Menu } from 'semantic-ui-react';
const Layout = (props) => {
  return (
    <Container>
      <Head>
        <link
          async
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
        />
      </Head>
      <Header />
      {props.children}
      <Menu
        style={{
          marginTop: '20px',
        }}
      >
        <Menu.Item color="red"> Connect to Ethereum Rinkeby Network with Metamask</Menu.Item>
      </Menu>
    </Container>
  );
};
export default Layout;

