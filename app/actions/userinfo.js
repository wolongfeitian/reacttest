/**
 * Created by zhangyang18 on 2018/2/1.
 */
import * as actionTypes from '../constants/userinfo'

export function update(data) {
    return {
        type: actionTypes.USERINFO_UPDATE,
        data
    }
}