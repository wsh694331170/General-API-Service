import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { GeneralApiService } from '../providers/general-api.service';
import {
  GetIdCardInfoDto,
  GetMobilePhoneInfoDto,
  GetHistoryTodayDto,
  GetVerifyCodeImgDto,
} from '../dto';

@ApiTags('通用API')
@Controller('/general-api')
export class GeneralApiController {
  constructor(private readonly generalApiService: GeneralApiService) {}

  @ApiOperation({ summary: '获取城市列表' })
  @Get('/getCityList')
  async getCityList(): Promise<any> {
    return this.generalApiService.getCityList();
  }

  @ApiOperation({ summary: '获取身份证信息' })
  @Get('/getIdCardInfo')
  async getIdCardInfo(@Query() query: GetIdCardInfoDto): Promise<any> {
    const idCard = query.idcard || '';
    return this.generalApiService.getIdCardInfo(idCard);
  }

  @ApiOperation({ summary: '获取当前ip信息' })
  @Get('/getIpInfo')
  async getIpInfo(): Promise<any> {
    return this.generalApiService.getIpInfo();
  }

  @ApiOperation({ summary: '获取手机号信息' })
  @Get('/getMobilePhoneInfo')
  async getMobilePhoneInfo(
    @Query() query: GetMobilePhoneInfoDto,
  ): Promise<any> {
    const mobilePhone = query.mobilePhone || '';
    return this.generalApiService.getMobilePhoneInfo(mobilePhone);
  }

  @ApiOperation({ summary: '获取历史上的今天' })
  @Get('/getHistoryToday')
  async getHistoryToday(@Query() query: GetHistoryTodayDto): Promise<any> {
    const type = query.type || 0;
    return this.generalApiService.getHistoryToday(type);
  }

  @ApiOperation({ summary: '获取随机图片验证码' })
  @Get('/getVerifyCodeImg')
  async getVerifyCodeImg(@Query() query: GetVerifyCodeImgDto): Promise<any> {
    return this.generalApiService.getVerifyCodeImg(query);
  }
}
