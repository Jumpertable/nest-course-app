import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  sharedUser(): string {
    return 'User Function';
  }
}
