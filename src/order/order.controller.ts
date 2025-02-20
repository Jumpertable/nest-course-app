import { Controller, Get } from '@nestjs/common';
import { OrderService } from './order.service';
import { UtilityService } from 'src/shared/utility/utility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';


@Controller('order')
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    private readonly utilityService: UtilityService,
    private readonly globalHelperService: GlobalHelperService,
  ) {}

  @Get('/global')
  globalFunction(): string{
    return this.globalHelperService.globalFunction();
  }

  @Get('/shared')
  sharedOrder(): string {
    return this.utilityService.sharedOrder();
  }
}
