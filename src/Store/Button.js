import React from 'react';

const Button =(props)=> {
  
        const styles = {
            // button.btn
            buttonBtnElement: {
              width: "135px"
            }
          }
        return (
            <button type="button" className="btn btn-default" href={`#${props.buttonitem.tabName}`} data-toggle="tab" style={styles.buttonBtnElement}>
                <div className="hidden-xs">{props.buttonitem.showName}</div>
            </button>
        );
    
}

export default Button;
