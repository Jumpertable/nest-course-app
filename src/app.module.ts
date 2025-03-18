import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { UtilityModule } from './shared/utility/utility.module';
import { GlobalHelperModule } from './shared/global-helper/global-helper.module';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { ChatModule } from './chat/chat.module';
import { CustomerModule } from './customer/customer.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ProductModule,
    UtilityModule,
    GlobalHelperModule,
    UserModule,
    OrderModule,
    ChatModule,
    CustomerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
