import React, { Component } from "react";

export default class Header extends Component {
    render(){
        return(
            <header className="c-header__container">
                <div className="c-header__name">
                    BAS
                </div>
                <div className="c-header__burger">
                <span className="c-burger__line"></span>
              <span className="c-burger__line c-burger__line-1/2"></span>
                </div>
            </header>
        )
    }
}