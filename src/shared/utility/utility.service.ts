import { Injectable } from '@nestjs/common';

@Injectable()
export class UtilityService {
  sharedUser(): string {
    return 'use User shared mondule';
  }
  sharedOrder(): string {
    return 'use Order shared module';
  }
  sharedChat(): string{
    return 'use Chat shared module';
  }
}
