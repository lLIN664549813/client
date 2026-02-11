/*
 * @Description: '我的模块接口封装'
 * @Version: 1.0
 * @Autor:'zhanglin'
 * @Date: 2026-02-11 10:00:00
 * @LastEditors: 'zhanglin'
 * @LastEditTime: 2026-02-11 10:00:00
 */
import request from '@/utils/request'
import upload from '@/utils/upload'

const gatewayApiPrefix = '/gateway/api'
const gatewayWapPrefix = '/gateway/wap'

export function getMemberInfo() {
  return request({
    url: `${gatewayApiPrefix}/member/info`,
    method: 'get'
  })
}

export function modifyMember(data) {
  return request({
    url: `${gatewayApiPrefix}/member/modify`,
    method: 'post',
    data
  })
}

export function setSecurityCode(data) {
  return request({
    url: `${gatewayApiPrefix}/member/setSecurityCode`,
    method: 'post',
    data
  })
}

export function realNameAuth(data) {
  return request({
    url: `${gatewayApiPrefix}/member/realauth`,
    method: 'post',
    data
  })
}

export function getAccountAssets() {
  return request({
    url: `${gatewayApiPrefix}/account/assets`,
    method: 'get'
  })
}

export function getAccountBills(params) {
  return request({
    url: `${gatewayApiPrefix}/account/bills`,
    method: 'get',
    params
  })
}

export function transferAccount(data) {
  return request({
    url: `${gatewayApiPrefix}/account/transfer`,
    method: 'post',
    data
  })
}

export function withdrawAccount(data) {
  return request({
    url: `${gatewayApiPrefix}/account/withdraw`,
    method: 'post',
    data
  })
}

export function listMemberWallets() {
  return request({
    url: `${gatewayApiPrefix}/wallet/list`,
    method: 'get'
  })
}

export function addReceiveWallet(data) {
  return request({
    url: `${gatewayApiPrefix}/wallet/add`,
    method: 'post',
    data
  })
}

export function setDefaultWallet(walletId) {
  return request({
    url: `${gatewayApiPrefix}/wallet/default/${walletId}`,
    method: 'post'
  })
}

export function removeReceiveWallet(walletId) {
  return request({
    url: `${gatewayApiPrefix}/wallet/remove/${walletId}`,
    method: 'post'
  })
}

export function uploadCommonFile(filePath, name = 'file') {
  return upload({
    url: `${gatewayApiPrefix}/common/upload`,
    filePath,
    name
  })
}

export function getProtocolList(params) {
  return request({
    url: `${gatewayApiPrefix}/protocol/list`,
    method: 'get',
    params
  })
}

export function getProtocolSingle(params) {
  return request({
    url: `${gatewayApiPrefix}/protocol/single`,
    method: 'get',
    params
  })
}

export function getLatestVersion() {
  return request({
    url: `${gatewayApiPrefix}/appversion/latest`,
    method: 'get'
  })
}

export function logoutMember() {
  return request({
    url: `${gatewayApiPrefix}/auth/logout`,
    method: 'post'
  })
}

export function checkLoginState() {
  return request({
    url: `${gatewayApiPrefix}/auth/state`,
    method: 'get'
  })
}

export function getMessageList(params) {
  return request({
    url: `${gatewayApiPrefix}/message/list`,
    method: 'get',
    params
  })
}

export function getUnreadCount(params) {
  return request({
    url: `${gatewayApiPrefix}/message/unread`,
    method: 'get',
    params
  })
}

export function getRechargePage(params) {
  return request({
    url: `${gatewayWapPrefix}/share/recharge`,
    method: 'get',
    params
  })
}

export function patchRecharge(data) {
  return request({
    url: `${gatewayWapPrefix}/share/patch`,
    method: 'post',
    data
  })
}
