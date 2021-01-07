import React from 'react'
import List from './components/List'
import Footer from './components/Footer'
import axios from 'axios'

class App extends React.Component{
  constructor(){
    super();
    this.changeCheck = this.changeCheck.bind(this);
    this.changeNum = this.changeNum.bind(this);
  }

  state = {
    list: []
  }

  async componentDidMount(){
    let result = await axios.get('/list');
    debugger
    let list = result.data.data.list.map(item=>{
      return {...item, num: 0, checked: false, price: item.price.toFixed(2)}
    })
    this.setState({list});
  }

  changeCheck(id){
    let newList = [...this.state.list];
    let index = newList.findIndex(item=>item.id === id);
    newList[index].checked = !newList[index].checked;
    this.setState({list: newList});
  }

  changeNum(id, type){
    let newList = [...this.state.list];
    let index = newList.findIndex(item=>item.id === id);
    // eslint-disable-next-line
    type==='+'?newList[index].num+=1:newList[index].num?newList[index].num-=1:'';
    this.setState({list: newList});
  }

  render(){
    let {list} = this.state;
    return <div>
      <p>每日优鲜购物车</p>
      <List list={list} changeCheck={this.changeCheck} changeNum={this.changeNum}/>
      <Footer list={list}/>
    </div>
  }

}

export default App;