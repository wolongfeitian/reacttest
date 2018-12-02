/**
 * Created by zhangyang18 on 2018/3/1.
 */
import * as actionTypes from '../constants/store'

export function update(data) {
    return {
        type:actionTypes.STORE_UPDATE,
        data
    }
}

export function add(item) {
    return {
        type:actionTypes.STORE_ADD,
        data:item
    }
}

export function rm(item) {
    return {
        type: actionTypes.STORE_RM
    }
}