import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'

import * as storeActionsFromFile from '../../../actions/store'

import BuyAndStore from '../../../components/BuyAndStore'

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
            <BuyAndStore isStore={this.state.isStore} buyHandle={this.buyHandle.bind(this)} storeHandle={this.storeHandle.bind(this)}/>
        )
    }
    componentDidMount(){
        //验证当前商户是否收藏
        this.checkStoreState()
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
    //检查登录状态
    loginCheck(){
        const id = this.props.id
        const userinfo = this.props.userinfo
        if(!userinfo.username){
            //跳转到登录页面的时候，要传入目标route，以便登陆成功后跳转
            hashHistory.push('/Login/'+encodeURIComponent('/detail/'+id))
            return false
        }
        return true
    }
    //购买
    buyHandle(){
        //验证登录，未登录则return
        const loginFlag = this.loginCheck()
        if(!loginFlag) {
            return
        }
        //购买过程省略

        //跳到用户主页
        hashHistory.push('/User')
    }

    //收藏
    storeHandle(){
        //验证登录，未登录则return
        const loginFlag = this.loginCheck()
        if(!loginFlag) {
            return
        }

        const id = this.props.id
        const storeActions = this.props.storeActions
        if(this.state.isStore){
            //已经收藏则取消收藏
            storeActions.rm({id:id})
        }else {
            //未收藏，则添加收藏
            storeActions.add({id:id})
        }
        this.setState({
            isStore:!this.state.isStore
        })
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
        store: state.store
    }
}

function mapDispatchToProps(dispatch) {
    return {
        storeActions: bindActionCreators(storeActionsFromFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Buy)