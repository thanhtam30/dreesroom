import React, { Component } from 'react';

class BikiniBottom extends Component {
render() {
    const Style={
        BikiniBottom:{
            width: "500px",
            height: "1000px",
            background: 'url("./images/clothes/botcloth1.png")',
            position: "absolute",
            top: "-30%",
            left: "-5%",
            zIndex: "2",
            transform: "scale(0.5)"
    }
}
        return (
            <div className='BikiniBottom' style={Style.BikiniBottom}></div>
        );
    }
}

export default BikiniBottom;