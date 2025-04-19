import { Injectable } from '@nestjs/common';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';
import { Music } from './entities/music';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';

@Injectable()
export class MusicService {
  constructor(
    @InjectModel(Music)
    private readonly musicModel: typeof Music,
  ) {}

  async findAll() {
    return await this.musicModel.findAll({
      order: [['id', 'desc']],
    });
  }

  async findOne(id: number) {
    return await this.musicModel.findByPk(id);
  }

  async findName(music_name: string) {
    return await this.musicModel.findOne({
      where: {
        music_name: {
          [Op.iLike]: `%${music_name}`,
        },
      },
    });
  }

  async create(createMusicDto: CreateMusicDto) {
    return await this.musicModel.create(createMusicDto as Partial<Music>);
  }

  async update(id: number, updateMusicDto: UpdateMusicDto) {
    return await this.musicModel.update(updateMusicDto, {
      where: { id: id },
    });
  }

  async remove(id: number) {
    return await this.musicModel.destroy({
      where: { id: id },
    });
  }
}
