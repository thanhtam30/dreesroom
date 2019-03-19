import React, { Component } from 'react';
import Body from './Contain/Body'
import BikiniTop from './Contain/BikiniTop'
import BikiniBottom from './Contain/BikiniBottom'
import Feet from './Contain/Feet'
import Model from './Contain/Model'
class Contain extends Component {
    render() {
        const styles = {
            // .contain
            containClass: {
              width: "460px",
              height: "590px",
              margin: "0 auto",
              background: 'url(./images/background/background_998.jpg)',
               background: "#eff1f1",
              position: "relative",

            }
          }


        return (
            <div className="contain" style={styles.containClass}>
                <Body/>
                <BikiniTop item={this.props.item}/>
                <BikiniBottom/>
                <Feet/>
                <Model/>
            </div>
        );
    }
}

export default Contain;
