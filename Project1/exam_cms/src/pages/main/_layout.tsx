import React from 'react'
import {Link, useDispatch, useHistory} from 'umi'
import { Layout, Menu, Breadcrumb, Dropdown, Avatar, Image, Button } from 'antd';
import styles from './_layout.less';
// import './_layout.less';
// 引入国际化
import { useIntl, getLocale, setLocale, useSelector } from 'umi';
import { IMenu } from '../../utils/interface';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const MainLayout: React.FC = (props) => {
  const intl = useIntl();
  const {userMenu}:{userMenu:IMenu[]} = useSelector(models=>models.user);
  const dispatch = useDispatch();
  const history = useHistory();

  function logout(){
    dispatch({
      type: 'user/logout'
    })
    // 重定向到登陆页面
    history.replace('/login');
  }

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
      <Menu.Item danger onClick={logout}>{intl.formatMessage({id: 'logout'})}</Menu.Item>
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

  function clickMenu(value: string){
    console.log('window._hmt..', window._hmt, _hmt);
    (window as any)._hmt.push(['_trackEvent', '导航菜单', 'click', '菜单名称', value]);
    debugger
  }

  // 处理默认选中和展开菜单
  let defaultOpenKeys = userMenu.length?[userMenu[0].name]: [];
  let defaultSelectedKeys = userMenu.length?[userMenu[0].children![0].name]: [];
  console.log('default...', defaultOpenKeys, defaultSelectedKeys);
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
            key={userMenu.length}
            defaultOpenKeys={defaultOpenKeys}
            defaultSelectedKeys={defaultSelectedKeys}
            style={{ height: '100%', borderRight: 0 }}
          >{
            userMenu.map(item=>{
              return <SubMenu key={item.name} icon={<item.meta.icon />} title={intl.formatMessage({id: item.name})}>{
                item.children?.map(value=>{
                  return value.meta.show?<Menu.Item key={value.name} onClick={()=>clickMenu(value.name)}>
                    <Link to={value.path}>{intl.formatMessage({id: value.name})}</Link>
                  </Menu.Item>:null
                })
              }</SubMenu>
            })
          }
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
