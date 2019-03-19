import React, { Component } from 'react';

class Feet extends Component {
    render() {
        const styles = {
            // .body
            feet: {
                width: "500px",
            height: "1000px",
            // background: 'url("./images/shoes/shoes1.png")',
            position: "absolute",
            bottom: "-37%",
            right: "-3.5%",
            transform: "scale(0.5)",
            zIndex: "1"
            }
        }

        return (
            <div className="feet" style={styles.feet}></div>
        );
    }
}

export default Feet;
