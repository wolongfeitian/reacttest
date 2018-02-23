import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class SearchInput extends React.Component {
    constructor(props , context){
        super(props , context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            value :''
        }
    }
    render(){
        return(
            <input type="text" placeholder="请输入关键字"
                   onChange={this.changeHandle.bind(this)}
                   onKeyUp={this.keyUpHandle.bind(this)}
                   value={this.state.value}/>
        )
    }

    componentDidMount(){
        this.setState({
            value:this.props.value ||''
        })
    }

    changeHandle(e){
        var val = e.target.value
        console.log(44444)
        this.setState({
            value:val
        })
    }
    keyUpHandle(e){
        if(e.keyCode!=13){
            return
        }
        this.props.enterHandle(e.target.value)
    }
}

export default SearchInput