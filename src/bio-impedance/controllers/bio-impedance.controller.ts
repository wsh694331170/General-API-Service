import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { BioImpedanceService, BioImpedanceRecord } from '../providers';

@Controller('/bio-impedance')
export class BioImpedanceController {
  constructor(private readonly service: BioImpedanceService) {}

  @Get('/queryAll')
  findAll() {
    return this.service.findAll();
  }

  @Get('/queryById')
  findOne(@Query('id') id: string) {
    return this.service.findOne(id);
  }

  @Post('/add')
  create(@Body() body: { name: string }) {
    return this.service.create(body.name);
  }

  @Post('/update')
  update(@Body() updates: Partial<BioImpedanceRecord>) {
    return this.service.update(updates);
  }

  @Post('/delete')
  delete(@Body() body: { id: string }) {
    return this.service.delete(body.id);
  }
}
