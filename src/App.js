import React, { Component } from 'react';
import './App.css';
import Contain from './Modal/Contain'
import BtnGroup from './Store/Btngroup'
import Store from './Store/Store'

class App extends Component {
  
constructor(props) {
  super(props)
  this.state={
    item:null
  }
}
imgSrctrancer=(item)=>{
this.setState({
  item:item
})
}
  render() {
    
    
    return (
      <div className="container-fluid">
        <h1 className="text-center">ĐỒ ÁN 3 - PHÒNG THỬ ĐỒ</h1>
        <div className="row">
          {/* Hiển thị danh sách các item */}
          <div className="col-md-8">
           <BtnGroup/>
           <Store imgSrctrancer={this.imgSrctrancer.bind(this)}/>
          </div>

          {/* Hiển thị người mẫu */}
          <div className="col-md-4">
           <Contain item={this.state.item}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

