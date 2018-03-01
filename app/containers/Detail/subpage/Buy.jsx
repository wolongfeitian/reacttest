import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'

import * as storeActionsFromFile from '../../../actions/store'

class Buy extends React.Component {
    constructor(props, context){
        super(props,context)
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            isStore: false
        }
    }
    render(){
        return (
            <div></div>
        )
    }

    //检验当前商户是否已收藏
    checkStoreState() {
        const id = this.props.id
        const store = this.props.store

        //some 即任何一个满足即可
        store.some(item => {
            if(item.id === id) {
                this.setState({
                    isStore:true
                })
                //跳出循环
                return true
            }
        })
    }
}