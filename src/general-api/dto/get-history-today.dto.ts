import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsIn, IsInt } from 'class-validator';
import { Transform } from 'class-transformer';

const TYPE = {
  NO_DETAIL: 0,
  HAVE_DETAIL: 1,
};
/**
 * 获取身份证信息查询条件
 */
export class GetHistoryTodayDto {
  @ApiPropertyOptional({
    description: '是否需要详情，0：不需要详情 1：需要详情 默认值 0 可不传',
  })
  @IsInt()
  @IsIn([TYPE.HAVE_DETAIL, TYPE.NO_DETAIL])
  @Transform(({ value }) => parseInt(value))
  type: number = TYPE.NO_DETAIL;
}
