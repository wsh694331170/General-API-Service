import { ApiProperty } from '@nestjs/swagger';
import { IsString, Matches } from 'class-validator';

/**
 * 获取身份证信息查询条件
 */
export class GetMobilePhoneInfoDto {
  @ApiProperty({
    description: '手机号',
  })
  @IsString()
  @Matches(/^(?:(?:\+|00)86)?1\d{10}$/, {
    message: '不是有效手机号格式',
  })
  mobilePhone: string;
}
