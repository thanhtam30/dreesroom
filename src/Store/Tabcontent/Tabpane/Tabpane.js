import React, { Component } from 'react';
import room from '../../../Data/GetData'
import Item from './Item/Item'

class Tabpane extends Component {
  
constructor(props) {
    super(props)
    this.state={
        room:room.Room,
        item:null
    }
}
imgSrctrancer=(item)=>{
    this.setState({
        item:item
    })
}
 
getTypeArr=(tabType)=>{
            let tenArr=[];
            for(let item of this.state.room){
                if(item.type===tabType){
                    tenArr=[...tenArr,item]
                }
            }
            return tenArr;
}
getElemnt=(tenArr)=>{
let elm=tenArr.map((item,index)=>{
    return <Item key={index} item={item} imgSrctrancer={this.props.imgSrctrancer}/>
    })
return elm;
}
    render() {
        console.log(this.state.item);
        
     let elm=null;
     let tenArr=null;
   switch (this.props.buttonitem.tabName) {
       case 'tabTopClothes':
           tenArr=this.getTypeArr('topclothes')
           elm=this.getElemnt(tenArr);
           break;
           case 'tabBotClothes':
           tenArr=this.getTypeArr('botclothes')
           elm=this.getElemnt(tenArr);
           break;
           case 'tabShoes':
           tenArr=this.getTypeArr('shoes')
           elm=this.getElemnt(tenArr);
           break;
           case 'tabHandBags':
           tenArr=this.getTypeArr('handbags')
           elm=this.getElemnt(tenArr);
           break;
           case 'tabNecklaces':
           tenArr=this.getTypeArr('necklaces')
           elm=this.getElemnt(tenArr);
           break;
           case 'tabHairStyle':
           tenArr=this.getTypeArr('hairstyle')
           elm=this.getElemnt(tenArr);
           break;
           case 'tabBackground':
           tenArr=this.getTypeArr('background')
           elm=this.getElemnt(tenArr);
           break;
       default:
           break;
   }
        return (
            <div className="tab-pane fade in" id={this.props.buttonitem.tabName}>
           {elm}
            </div>
        )
    }
}

export default Tabpane;
