import { Injectable } from '@nestjs/common';
import { info } from 'console';

@Injectable()
export class ActivityService {
    findOne(name: string): string {
        info(`this ${name}`)
        return `this ${name}`
    }
}
