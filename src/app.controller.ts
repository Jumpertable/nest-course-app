import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/name')
  getName(): string {
    return this.appService.getName();
  }
  @Get('/Jim')
  getJim(): string{
    return this.appService.getJim();
  }
  @Get('/Info')
  showInfo(): string{
    return this.appService.showInfo();
  }
  @Get('/showJSON')
  getJSON(){
    return this.appService.getJSON();
  }
  @Get('/ShowJSON2') //localhost:3000/showJSON2
  showJSON2(){
    return this.appService.showJSON2();
  }
}
