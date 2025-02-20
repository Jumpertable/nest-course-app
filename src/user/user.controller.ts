import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UtilityService } from 'src/shared/utility/utility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly utilityService: UtilityService,
    private readonly globalHelperService: GlobalHelperService,
  ) {}

  @Get('/global')
  globalFun(): string{
    return this.globalHelperService.globalFun();
  }

  @Get('/shared')
  sharedUser(): string {
    return this.utilityService.sharedUser();
  }
}
