import React from 'react';
import './App.css';

class App extends React.Component{
  // 初始化data数据
 constructor(props){
    super(props);
    this.state = {
    
      list:[
        {name:'哈哈张三'},
        {name:'嘻嘻李四'},
        {name:'嘻嘻王五'}
      ],
      arr:[
        {name:'哈哈张1'},
        {name:'嘻嘻李四'},
        {name:'嘻嘻王五'}
      ]
    }
  }
 
  // 事件
   btn(){
    alert('1')
 }
  render(){
    return(
      <div>
       {1+1}<br/>
          <input />
          <button onClick={this.btn}>点我</button>
          <ul>
             {
               this.state.list.map((item,key)=>{
                 return <li key={key}>{item.name}</li>
               })
             }
          </ul>
      </div>
    );
  }
}

export default App;
