import { Component } from 'react';
import { Layout } from 'antd';

import '@/layouts/index.scss'


const { Header, Footer, Content } = Layout;

export default class UserLayout extends Component {
  render() {
    return (
      <Layout>
        <Layout >
          <Header style={{ background: '#fff', textAlign: 'center',}}>


          </Header>
          <Content style={{ margin: '0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
          {/*<Footer style={{ textAlign: 'center' }}>copyright©2020 Created by 广州云互科技有限公司</Footer>*/}
        </Layout>
      </Layout>
    )
  }
}
