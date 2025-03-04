import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';

const DATA_FILE = path.join(__dirname, 'data.json');

export interface BioImpedanceRecord {
  id: string;
  name: string;
  status: '未开始' | '数据录入' | '数据分析';
  recordTime: string;
  updateTime: string;
  details: string;
  conclusion: string;
}

@Injectable()
export class BioImpedanceService {
  private records: BioImpedanceRecord[] = [];

  constructor() {
    this.loadData();
  }

  private loadData() {
    if (fs.existsSync(DATA_FILE)) {
      const data = fs.readFileSync(DATA_FILE, 'utf8');
      this.records = JSON.parse(data);
    }
  }

  private saveData() {
    fs.writeFileSync(DATA_FILE, JSON.stringify(this.records, null, 2), 'utf8');
  }

  findAll(): BioImpedanceRecord[] {
    return this.records;
  }

  findOne(id: string): BioImpedanceRecord | undefined {
    return this.records.find((record) => record.id === id);
  }

  create(name: string): BioImpedanceRecord {
    const newRecord: BioImpedanceRecord = {
      id: uuidv4(),
      name,
      status: '未开始',
      recordTime: new Date().toISOString(),
      updateTime: new Date().toISOString(),
      details: '',
      conclusion: '',
    };
    this.records.push(newRecord);
    this.saveData();
    return newRecord;
  }

  update(
    id: string,
    updates: Partial<BioImpedanceRecord>,
  ): BioImpedanceRecord | null {
    const record = this.records.find((r) => r.id === id);
    if (!record) return null;
    Object.assign(record, updates, { updateTime: new Date().toISOString() });
    this.saveData();
    return record;
  }

  delete(id: string): boolean {
    const index = this.records.findIndex((r) => r.id === id);
    if (index === -1) return false;
    this.records.splice(index, 1);
    this.saveData();
    return true;
  }
}
