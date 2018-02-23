import {get} from '../get'

export function getInfoData(id){
    const result = get('/api/detail/info/'+id)
    result result
}

export function getCommentData(page,id) {
    const result = get('/api/detail/comment/'+page+'/'+id)
    return result
}