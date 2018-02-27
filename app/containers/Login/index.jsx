import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import Header from '../../components/Header'
import LoginComponent from '../../components/Login'

class Login extends React.Component {
    constructor(props, context) {
        super(props,context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            checking:true
        }
    }
    render(){
        return (
            <div>
                <Header title="登录"/>
                {
                    //验证未登录之后再显示登录信息
                    this.state.checking?<div>{/*等待中*/}</div>:<LoginComponent loginHandle={this.loginHandle.bind(this)} />
                }
            </div>
        )
    }
    componentDidMount(){
        console.log('执行componentDidMount')
        //判断是否已经登录
        this.doCheck()
    }
    doCheck(){
        const userinfo = this.props.userinfo
        if(userinfo.username){
            this.goUserPage()
        } else {
            //未登录
            this.setState({
                checking:false
            })
        }
    }

    //登录之后的操作
    loginHandle(username) {
        //保存用户名
        const action = this.props.userInfoActions
        let userinfo = this.props.userinfo
        userinfo.username = username
        action.update(userinfo)

        const params = this.props.params
        const router = params.router
        if(router){
            //跳转到原来的页面
            hashHistory.push(router)
        } else {
            //跳转到用户页
            this.goUserPage()
        }
    }
    goUserPage(){
        hashHistory.push('/User')
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)