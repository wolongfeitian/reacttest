/**
 * Created by zhangyang18 on 2018/2/1.
 */
import { combineReducers} from 'redux'
import userinfo from './userinfo'
import store from './store'
//生成state
export default combineReducers({
    userinfo,
    store
})