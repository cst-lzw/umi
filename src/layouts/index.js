import { Component } from 'react';
import { Layout } from 'antd';

import '@/layouts/index.scss'


const { Header, Footer, Sider, Content } = Layout;

export default class BasicLayout extends Component {
  render() {
    return (
      <Layout>
        {/*<Sider width={256} style={{ minHeight: '100vh', color: 'white'}}*/}
        {/*       trigger={null}*/}
        {/*       collapsible*/}
        {/*       collapsed={false}*/}
        {/*>*/}
        {/*  silder*/}
        {/*</Sider>*/}
        <Layout >
          <Header style={{ background: '#fff', textAlign: 'center',}}>
            <div>

            </div>
          </Header>
          <Content style={{ margin: '0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>copyright©2020 Created by 广州云互科技有限公司</Footer>
        </Layout>
      </Layout>
    )
  }
}
