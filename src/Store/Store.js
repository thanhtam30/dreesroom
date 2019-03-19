import React, { Component } from 'react';
import Tabcontent from './Tabcontent/Tabcontent'
class Store extends Component {

    render() {
        return (
            <div className='Store'>
            <Tabcontent imgSrctrancer={this.props.imgSrctrancer}/>

            </div>
        );
    }
}

export default Store;