import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatService {
  sharedChat(): string {
    return 'Chat Function';
  }
}
