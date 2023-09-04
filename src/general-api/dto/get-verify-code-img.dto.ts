import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsIn, IsInt } from 'class-validator';
import { Transform } from 'class-transformer';
const TYPE = {
  URL: 0,
  BASE64: 1,
};
/**
 * 获取随机图片验证码
 */
export class GetVerifyCodeImgDto {
  @ApiPropertyOptional({
    description: '生成验证码的长度，不传默认5位',
  })
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  len: number = 5;

  @ApiProperty({
    description:
      '返回类型，0-生成图片的地址链接 1-生成验证码图片的base64字符串（注：Base64字符串前面默认添加了“data:image/jpg;base64,”，取值的时候请根据需要对这个内容进行处理）',
  })
  @IsInt()
  @IsIn([TYPE.URL, TYPE.BASE64])
  @Transform(({ value }) => parseInt(value))
  type: number;
}
