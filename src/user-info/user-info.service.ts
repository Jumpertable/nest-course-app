import { Injectable } from '@nestjs/common';
import { CreateUserInfoDto } from './dto/create-user-info.dto';
import { UpdateUserInfoDto } from './dto/update-user-info.dto';
import { UserInfo } from './entities/user-info.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UserInfoService {
  constructor(
    @InjectModel(UserInfo)
    private userInfoModel: typeof UserInfo,
  ) {}

  async create(createUserInfoDto: CreateUserInfoDto) {
    return await this.userInfoModel.create(
      createUserInfoDto as Partial<UserInfo>,
    );
  }

  async findAll() {
    return await this.userInfoModel.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} userInfo`;
  }

  async update(id: number, updateUserInfoDto: UpdateUserInfoDto) {
    return await this.userInfoModel.update(updateUserInfoDto, {
      where: { id: id }
    });
  }

  async remove(id: number) {
    return await this.userInfoModel.destroy({
      where: { id: id },
    });
  }

}
