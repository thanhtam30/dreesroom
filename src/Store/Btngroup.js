import React, { Component } from 'react';
import Button from './Button/Button'
import buttonArray from '../Data/buttonArray'
import $ from 'jquery'
class Btngroup extends Component {
constructor(props) {
    super(props)
    this.state={
        buttonArray:buttonArray
    }
}

    render() {
        $(document).ready(function () {
            // Tạo màu khởi đầu cho Tab Áo
            // $("[href='#tabTopClothes']").addClass("btn-primary"); 
      
            $(".btn-pref .btn").click(function () {
              $(".btn-pref .btn").removeClass("btn-primary").addClass("btn-default");
              $(this).removeClass("btn-default").addClass("btn-primary");
            });
          });
        let elmButton=this.state.buttonArray.map((buttonitem,index)=>{
            return <Button buttonitem={buttonitem} key={index}/>
        })
        return (
            <div className="btn-pref btn-group btn-group-justified btn-group-lg" role="group" aria-label="...">
                {elmButton}

           </div> 
        );
    }
}

export default Btngroup;