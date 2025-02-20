import { Injectable } from '@nestjs/common';

@Injectable()
export class GlobalHelperService {
  globalFun(): string {
    return 'use user global function';
  }

  globalFunc(): string {
    return 'use chat global function';
  }
  globalFunction(): string {
    return 'use order global function';
  }
}
