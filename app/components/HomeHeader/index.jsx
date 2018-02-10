import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link,hashHistory } from 'react-router'

import SearchInput from '../SearchInput'

import './style.less'

class HomeHeader extends React.Component {
    constructor(props, context){
        super(props, context);
        this.shouldComponentupdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            kwd: ''
        }
    }
    render(){
        return (
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <Link to="/city">
                        <span>{this.props.cityName}</span>
                        &nbsp;
                        <i className="icon-angle-down"></i>
                    </Link>
                </div>
                <div className="home-header-right float-right">
                    <i className="icon-user"></i>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <SearchInput/>
                    </div>
                </div>
            </div>
        )
    }

}

export default HomeHeader