import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  sharedOrder(): string {
    return 'Order Function';
  }
}
