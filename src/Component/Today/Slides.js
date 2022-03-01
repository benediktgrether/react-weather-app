import { Component } from "react";

export default class Slides extends Component {
    render(){
        const { isActive } = this.props;
        let className = isActive ? 'c-slider-pagination__list c-slider-pagination__list-active' : 'c-slider-pagination__list'
        return(
            <span className={className}></span>
        )
    }
}