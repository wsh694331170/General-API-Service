import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

const DATA_FILE = 'data.json';
const successBack = (data: any) => {
  return {
    code: 200,
    message: 'success',
    data,
  };
};

export interface BioImpedanceRecord {
  id: string;
  name: string;
  status: '未开始' | '数据录入' | '数据分析';
  recordTime: string;
  updateTime: string;
  details: string;
  conclusion: string;
}

export interface SuccessBack<T> {
  code: number;
  message: string;
  data: T;
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
    try {
      fs.writeFileSync(
        DATA_FILE,
        JSON.stringify(this.records, null, 2),
        'utf8',
      );
    } catch (error) {
      console.error('Error in saveData:', error);
      throw new Error('Failed to save data'); // 让 create 方法的 try-catch 捕获
    }
  }

  findAll(): SuccessBack<BioImpedanceRecord[]> {
    return successBack(this.records);
  }

  findOne(id: string): SuccessBack<BioImpedanceRecord | undefined> {
    return successBack(this.records.find((record) => record.id === id));
  }

  create(name: string): SuccessBack<boolean> {
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
    return successBack(true);
  }

  update(updates: Partial<BioImpedanceRecord>): SuccessBack<boolean> {
    const record = this.records.find((r) => r.id === updates.id);
    if (!record) return null;
    Object.assign(record, updates, { updateTime: new Date().toISOString() });
    this.saveData();
    return successBack(true);
  }

  delete(id: string): SuccessBack<boolean> {
    const index = this.records.findIndex((r) => r.id === id);
    if (index === -1) return successBack(false);
    this.records.splice(index, 1);
    this.saveData();
    return successBack(true);
  }
}
