/* eslint-disable @typescript-eslint/no-unsafe-argument */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  NotFoundException,

} from '@nestjs/common';
import { UserInfoService } from './user-info.service';
import { CreateUserInfoDto } from './dto/create-user-info.dto';
import { UpdateUserInfoDto } from './dto/update-user-info.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('user-info')
@UseGuards(AuthGuard('jwt'))
export class UserInfoController {
  constructor(private readonly userInfoService: UserInfoService) {}

  @Post('/create') //localhost:3000/userinfo/create
  async create(@Body() createUserInfoDto: CreateUserInfoDto) {
    const createUserInfo = await this.userInfoService.create(createUserInfoDto);
    if (createUserInfo == null) {
      throw new Error('Cannot Create Data!');
    }
    return{
      message: 'Create Data Complete',
      data: createUserInfo,
    };
  }

  @Get()
  findAll() {
    return this.userInfoService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userInfoService.findOne(+id);
  }

  @Patch('/update/:id')
  async update(
    @Param('id') id: string,
    @Body() updateUserInfoDto: UpdateUserInfoDto,
  ) {
    const [updateUserInfo] = await this.userInfoService.update(
      +id,
      updateUserInfoDto,
    );
    console.log(updateUserInfoDto);
    if (updateUserInfo === 0) {
      throw new NotFoundException('Not Found data to update!');
  }
    return { message: 'Update Data Complete'};
  }

  @Delete('/delete/:id')
  async remove(@Param('id') id: string) {
    const destoryUserInfo = await this.userInfoService.remove(+id);
    console.log(destoryUserInfo);
    if (destoryUserInfo === 0){
      throw new NotFoundException('Cannot Find Data to Remove!!!');
    }
    return { message: 'Remove Data Complete'};
  }
}
