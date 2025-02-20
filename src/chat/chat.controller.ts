import { Controller, Get } from '@nestjs/common';
import { ChatService } from './chat.service';
import { UtilityService } from 'src/shared/utility/utility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Controller('chat')
export class ChatController {
  constructor(
    private readonly chatService: ChatService,
    private readonly utilityService: UtilityService,
    private readonly globalHelperService: GlobalHelperService,

  ) {}
  @Get('/global')
  globalFunc(): string{
    return this.globalHelperService.globalFunc();
  }

  @Get('/shared')
  sharedChat(): string {
    return this.utilityService.sharedChat();
  }
}