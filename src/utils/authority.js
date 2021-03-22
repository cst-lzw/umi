// use localStorage to store the authority info, which might be sent from server in actual project.

import router from 'umi/router'
import {aesEncrypt,aesDecrypt} from './encrypt/aes'
const CryptoJS = require('crypto-js');

const userKey='news-platform-UserToken-v1.0'  //tokenKey

//encrypt
const encKey = CryptoJS.enc.Utf8.parse("1234123412ABCDEF");  //十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse('ABCDEF1234123412');   //十六位十六进制数作为密钥偏移量

export function getAuthority() {
  const userToken=getUserToken()
  //userToken
  let authority =[]
  if(userToken.hasOwnProperty('Authority')){
    authority =  userToken["Authority"] ? userToken["Authority"]: []
  }
  return authority
}

export function setUserToken(userToken,Days) {
  const key=userKey
  const expire= parseInt(Days)||7
  //设置过期时间
  const sUserToken=JSON.stringify(userToken)
  localStorage.setItem(`${key}`,aesEncrypt(sUserToken,encKey,iv))
  localStorage.setItem(`${key}__expires__`,Date.now()+expire* 24 * 60 * 60 * 1000)
  return
}

export function getUserToken(){
  let userToken={}
  //查看是否过期
  try{
    const key=userKey
    const sNow = Date.now()
    const expired=localStorage.getItem(`${key}__expires__`)||sNow+1
    if(sNow>=expired){
      localStorage.removeItem(key)
    }else {
      userToken=localStorage.getItem(key)||{}
      try {
        const sUserToken=aesDecrypt(userToken,encKey,iv)
        userToken= JSON.parse(sUserToken)

      } catch (e) {
        userToken = {}
      }
    }
    if(Object.keys(userToken).length===0){
      // 跳转到登录页
      router.push("/user/login")
      // return ;
    }

  }catch (e) {
    if(Object.keys(userToken).length===0){
      // 跳转到登录页
      router.push("/user/login")
      // return ;
    }

  }
  return userToken
}
export function removeUserToken() {
  localStorage.removeItem(userKey)
}
