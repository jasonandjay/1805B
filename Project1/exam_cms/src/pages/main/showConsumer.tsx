import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'umi';
import { Table, Avatar, Button } from 'antd';
import XLSX from 'xlsx';

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

  function exportExcel(){
    // 创建workbook
    var wb = XLSX.utils.book_new();
    var ws_data = [columns.map(item=>item.title), ...dataSource.map(item=>Object.values(item))];
    console.log('ws_data...', ws_data);
    // 创建worksheet
    var ws = XLSX.utils.aoa_to_sheet(ws_data);
    XLSX.utils.book_append_sheet(wb, ws, '预排课表');
    debugger;
    XLSX.writeFile(wb, 'project.xlsb');
  }

  function importExcel(e: React.ChangeEvent<HTMLInputElement>){
    let file = (e.target as any).files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
      var data = new Uint8Array((e.target as any).result);
      var workbook = XLSX.read(data, {type: 'array'});
      var worksheet = workbook.Sheets[workbook.SheetNames[0]];
      var data = XLSX.utils.sheet_to_json(worksheet);
      console.log('data...', data);
      // 渲染表格
      setDataSource(data);
      setColumns([{
        title: '上课日期',
        dataIndex: '上课日期'
      }, {
        title: '上课时间',
        dataIndex: '上课时间'
      }, {
        title: '合班后人数',
        dataIndex: '合班后人数'
      }, {
        title: '合班后班级名称',
        dataIndex: '合班后班级名称'
      }, {
        title: '学院',
        dataIndex: '学院'
      }, {
        title: '时间',
        dataIndex: '时间'
      }, {
        title: '班级所属教研室',
        dataIndex: '班级所属教研室'
      }, {
        title: '课程名称',
        dataIndex: '课程名称'
      }, {
        title: '辅导员',
        dataIndex: '辅导员'
      }])
      /* DO SOMETHING WITH workbook HERE */
    };
    reader.readAsArrayBuffer(file);
  }

  return (
    <div>
      <h1>用户展示</h1>
      <div>
        <Button type="primary" onClick={exportExcel}>导出数据</Button>
        <Button type="ghost">
          <input type="file" onChange={importExcel}/> 导入数据</Button>
      </div>
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
