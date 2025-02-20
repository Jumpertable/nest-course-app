import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  productFunc(): string {
    return 'Hello from product service.';
  }
  productFunc2(): string {
    return 'Hello from product service 2.';
  }
  JSon() {
    return {
      name: 'Charlotte',
      age: 22,
      hobby: 'Watching movies',
    };
  }
}

