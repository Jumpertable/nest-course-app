import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @Get(':id') // localhost:3000/customer/:id
  async findOne(@Param('id') id: string) {
    const findcustomer = await this.customerService.findOne(+id);
    if (findcustomer == null){
      //error message
      throw new NotFoundException('Not Found Data!!!');
    }
    return this.customerService.findOne(+id);
  }

  @Get('/findfullname/:fullname') //localhost:3000/customer/findfullname/:fullname
  async findFullname(@Param('fullname') fullname: string){
    const findfullname = await this.customerService.findFullname(fullname);
    if (findfullname == null) {
      //error message
      throw new NotFoundException('Not Found Data!!');
    }
    return findfullname;
  }

  @Patch('/update/:id') //localhost:3000/customer/update/:id
  async update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    const [updateCustomer] = await this.customerService.update(
      +id,
      updateCustomerDto,
    );
    console.log(updateCustomerDto);
    if (updateCustomer === 0){
      throw new NotFoundException('Not Found Data to Update!!!');
    }
    return { message: 'Update Data Complete' };
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/delete/:id') //localhost:3000/customer/delete/:id
  async remove(@Param('id') id: string) {
    const destoryCustomer = await this.customerService.remove(+id);
    console.log(destoryCustomer);
    if (destoryCustomer === 0) {
      throw new NotFoundException('Not Found Data to Remove AAAHHHHHH!!!');
    }
    return { message: 'Remove Data Complete'};
  }

  @Post('/create') //localhost:3000/customer/create
  async creat(@Body() createCustomerDto: CreateCustomerDto){
    const createCustomer = await this.customerService.create(createCustomerDto);
    if (createCustomer == null) {
      throw new Error('can not create data!!!');
    }
    return{
      message: 'Create Date Conplete',
      data: createCustomer,
    };
  }

}
