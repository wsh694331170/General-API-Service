import { generalAPIClient } from '../client'
import { GetVerifyCodeImgDto } from '../general-api/dto'

export const getCityList = async () => {
  const res = await generalAPIClient.get('/address/list')
  return res
}
export const getIdCardInfo = async (idcard: string) => {
  const res = await generalAPIClient.get(`/idcard/search?idcard=${idcard}`)
  return res
}
export const getIpInfo = async () => {
  const res = await generalAPIClient.get('/ip/self')
  return res
}
export const getMobilePhoneInfo = async (mobilePhone: string) => {
  const res = await generalAPIClient.get(`/mobile_location/aim_mobile?mobile=${mobilePhone}`)
  return res
}
export const getHistoryToday = async (type: number) => {
  const res = await generalAPIClient.get(`/history/today?type=${type}`)
  return res
}
export const getVerifyCodeImg = async (params: GetVerifyCodeImgDto) => {
  const res = await generalAPIClient.get(`/verifycode/code`, { params });
  return res
}