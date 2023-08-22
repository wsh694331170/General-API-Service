import { Injectable } from '@nestjs/common';
import { getCityList, getIdCardInfo, getIpInfo, getMobilePhoneInfo, getHistoryToday } from '../../api'

@Injectable()
export class GeneralApiService {
  async getCityList(): Promise<any> {
    const res = await getCityList()
    return res;
  }
  async getIdCardInfo(idCard: string): Promise<any> {
    const res = await getIdCardInfo(idCard)
    return res;
  }
  async getIpInfo(): Promise<any> {
    const res = await getIpInfo()
    return res;
  }
  async getMobilePhoneInfo(mobilePhone: string): Promise<any> {
    const res = await getMobilePhoneInfo(mobilePhone)
    return res;
  }
  async getHistoryToday(type: number): Promise<any> {
    const res = await getHistoryToday(type)
    return res;
  }
}
