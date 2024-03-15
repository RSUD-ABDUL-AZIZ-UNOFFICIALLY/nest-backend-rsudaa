import { Injectable } from '@nestjs/common';
import { info } from 'console';

@Injectable()
export class ActivityService {
    findOne(name: string): string {
        return `this ${name}`
    }
}
