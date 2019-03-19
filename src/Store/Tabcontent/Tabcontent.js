import React, { Component } from 'react';
import Tabpane from './Tabpane/Tabpane'
import buttonArray from '../../Data/buttonArray'

class Tabcontent extends Component {
constructor(props) {
    super(props)
    this.state={
        buttonArray:buttonArray
    }
}

    render() {
    
    
       
        let elmButton=this.state.buttonArray.map((buttonitem,index)=>{
            return <Tabpane buttonitem={buttonitem} key={index} imgSrctrancer={this.props.imgSrctrancer}/>
        })
        return (
            
            
            <div className="tab-content">
                {elmButton}

           </div> 
        );
    }
}

export default Tabcontent;