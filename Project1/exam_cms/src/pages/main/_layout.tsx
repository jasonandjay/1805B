import React from 'react'
import {Link} from 'umi'
import { Layout, Menu, Breadcrumb, Dropdown, Avatar, Image, Button } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, DownOutlined } from '@ant-design/icons';
import styles from './_layout.less';
// import './_layout.less';
// 引入国际化
import { useIntl, getLocale, setLocale } from 'umi';



const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const MainLayout: React.FC = (props) => {
  const intl = useIntl();
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          3rd menu item
        </a>
      </Menu.Item>
      <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
  );

  function changeLocale(){
    let locale = getLocale();
    if (locale === 'zh-CN'){
      setLocale('en-US', false);
    }else{
      setLocale('zh-CN', false);
    }
  }

  return (
    <Layout className="base-layout">
      <Header className="header">
        <img className={styles.logo} src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt="" />
        {/* <img className="logo" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt=""/> */}
        <Button onClick={changeLocale}>{getLocale()==='zh-CN'?'英文':'中文'}</Button>
        <Dropdown overlay={menu}>
          <div>
            <Avatar
              src={<Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            />
            <span>chenmanjie</span>
          </div>
        </Dropdown>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={['21']}
            defaultOpenKeys={['sub1', 'sub11']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title={intl.formatMessage({id: 'menu.question'})}>
              <Menu.Item key="1">
                <Link to="/main/addQuestions">{intl.formatMessage({id: 'menu.question.addQuestion'})}</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/main/questionTypes">{intl.formatMessage({id: 'menu.question.questionType'})}</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/main/watchQuestions">{intl.formatMessage({id: 'menu.question.watchQuestion'})}</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: '#fff'
            }}
          >{props.children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
}


export default MainLayout;
