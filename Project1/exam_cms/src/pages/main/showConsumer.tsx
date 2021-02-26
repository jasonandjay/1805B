import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'umi';
import { Table, Avatar } from 'antd';

const tables = [{
  title: '用户数据',
  dataSource: 'consumerList',
  action: 'getConsumerList',
  columns: [{
    title: '用户名',
    dataIndex: 'user_name'
  }, {
    title: '头像',
    render: (text:string, record:{avatar:string})=>{
      return <Avatar src={record.avatar || 'https://www.apple.com.cn/favicon.ico'}/>
    }
  }, {
    title: '密码',
    dataIndex: 'user_pwd'
  }, {
    title: '身份',
    dataIndex: 'identity_text'
  }]
}, {
  title: '身份数据',
  dataSource: 'identifyList',
  action: 'getIdentifyList',
  columns: [{
    title: '身份id',
    dataIndex: 'identity_id'
  }, {
    title: '身份名称',
    dataIndex: 'identity_text'
  }]
}, {
  title: 'api接口权限',
  action: 'getApiAuthority',
  dataSource: 'apiAuthorityList',
  columns: [{
    title: 'api接口名称',
    dataIndex: 'api_authority_text'
  }, {
    title: 'api权限名称',
    dataIndex: 'api_authority_text'
  }, {
    title: 'api权限url',
    dataIndex: 'api_authority_url'
  }, {
    title: 'api权限方法',
    dataIndex: 'api_authority_method'
  }]
}, {
  title: '身份和api接口关系',
  action: 'getViewAuthorityList',
  dataSource: 'viewAuthorityList'

}, {
  title: '身份和视图权限关系',
  action: 'getIdentityApiAuthorityRelation',
  dataSource: 'identityApiAuthorityRelation'

}, {
  title: '视图接口权限',
  action: 'getIdentityViewAuthorityRelation',
  dataSource: 'identityViewAuthorityRelation'

}]
const ShowConsumer: React.FC = ()=>{
  const [dataSource, setDataSource] = useState([]);
  const [columns, setColumns] = useState([]);
  const [select, setSelect] = useState<number>(0);

  // 通过useDispatch拿到派发redux的dispatch
  const dispatch  = useDispatch();
  const consumer = useSelector(models=>models.consumer);

  useEffect(()=>{
    setDataSource(consumer[tables[select].dataSource]);
    setColumns(tables[select].columns);
  }, [consumer])

  useEffect(()=>{
    if (!consumer[tables[select].dataSource].length){
      dispatch({
        type: `consumer/${tables[select].action}`
      });
    }else{
      setDataSource(consumer[tables[select].dataSource]);
      setColumns(tables[select].columns);
    }
  }, [select]);

  return (
    <div>
      <h1>用户展示</h1>
    <div>{
      tables.map((item, index)=>{
        return <span key={index} onClick={()=>setSelect(index)} className={index===select?'active':''}>{item.title}</span>
      })
    }</div>
      <p>{tables[select].title}</p>
      <Table dataSource={dataSource} columns={columns}></Table>
    </div>
  );
}

export default ShowConsumer;
