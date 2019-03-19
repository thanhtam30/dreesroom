// export default class Item{
//     constructor(id,type,name,desc,imgSrc_jpg,imgSrc_png){
//         this.id=id;
//         this.type=type;
//         this.name=name;
//         this.imgSrc_jpg=imgSrc_jpg;
//         this.imgSrc_png=imgSrc_png;
//     }
// }
import React, { Component } from 'react';

class Item extends Component {
    imgSrctrancer=()=>{
        this.props.imgSrctrancer(this.props.item)
    }
    render() {
        
        
        return (
            <div className='item'>
            <img src={this.props.item.imgSrc_jpg} alt='123'/>
            <button onClick={this.imgSrctrancer.bind(this)}>Thu do</button>
            </div>
        );
    }
}

export default Item;