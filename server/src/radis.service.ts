import { Injectable } from '@nestjs/common';
import { get, set } from './utils/radis';

@Injectable()
export class RadisService {
  async get(key: string) {
    return get(key);
  }
  async set(key: string, value: string) {
    await set(key, value);
    return true;
  }
}
