import { Module } from '@nestjs/common';
import { MusicController } from './music.controller';
import { MusicService } from './music.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Music } from './entities/music';

@Module({
  imports: [SequelizeModule.forFeature([Music])],
  controllers: [MusicController],
  providers: [MusicService],
})
export class MusicModule {}
