import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { BioImpedanceService, BioImpedanceRecord } from '../providers';

@Controller('bio-impedance')
export class BioImpedanceController {
  constructor(private readonly service: BioImpedanceService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() body: { name: string }) {
    return this.service.create(body.name);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updates: Partial<BioImpedanceRecord>,
  ) {
    return this.service.update(id, updates);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.service.delete(id);
  }
}
