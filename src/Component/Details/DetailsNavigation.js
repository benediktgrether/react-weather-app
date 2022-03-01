import React, { Component } from "react";

export default class DetailsNavigation extends Component{
    render(){
        const { isActive, navigationItem} = this.props;
        let className = isActive ? 'c-navigation-item c-navigation-item__active' : 'c-navigation-item'
        return(
            <>
                <div className={className}>{navigationItem}</div>
            </>
        )
    }

}