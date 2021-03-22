import {getRamNumber} from '../../common/common'
var nonceStr=''

export function resetNonceStr() {

    let newStr=getRamNumber()
    nonceStr=newStr
}

export function getNonceStr() {
    if (nonceStr.length===0){
        resetNonceStr()
    }
    return nonceStr
}
