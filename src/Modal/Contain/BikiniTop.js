import React, { Component } from 'react';

class BikiniTop extends Component {
constructor(props) {
    super(props)
    this.state={
        bikinitopstyle:{
            width: "250px",
            height: "500px",
            background: 'url(./images/allbody/bikini_branew.png)',
            position: "absolute",
            top: "12%",
            left: "22%",
            zIndex: "3"
        }
    }
}
componentWillReceiveProps() {
    this.changStyle();
}
changStyle=()=>{
    this.setState({
        bikinitopstyle:{
            width: "500px",
            height: "500px",
             
            position: "absolute",
            top: "-9%",
            left: "-5%",
            zIndex: "3",
            transform: "scale(0.5)"
        }
    })
}
render() {
    console.log(this.props.item);
    
    let Imgsrc;
    let newStyle=this.state.bikinitopstyle;
    if(this.props.item!==null){
        Imgsrc = this.props.item.imgSrc_png;
        
        console.log(Imgsrc);
        
        let background = `url(${Imgsrc})`;
        newStyle={...newStyle,background}
        console.log(newStyle);
        
    }

        
        return (
            <div className='bikinitop' style={newStyle}></div>
        );
    }
}

export default BikiniTop;