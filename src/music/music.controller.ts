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
import { MusicService } from './music.service';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('music') // localhost:3000/music
export class MusicController {
  constructor(private readonly musicService: MusicService) {}

  @Post('/') //localhost:3000/music
  async create(@Body() createMusicDto: CreateMusicDto) {
    const createMusic = await this.musicService.create(createMusicDto);
    if (createMusic == null) {
      throw new Error('Cannot Create Data!');
    }
    return {
      message: 'Create Data Complete',
      data: createMusic,
    };
  }

  @Get() //localhost:3000/music/
  findAll() {
    return this.musicService.findAll();
  }

  @Get(':id') // localhost:3000/music/:id
  async findOne(@Param('id') id: number) {
    const findmusic = await this.musicService.findOne(+id);
    if (findmusic == null) {
      // show error message
      throw new NotFoundException('Not Found Data!');
    }
    return findmusic;
  }

  @Get('/findName/:music_name') // localhost:3000/music/findName/:music_name
  async findName(@Param('music_name') music_name: string) {
    const MusicName = await this.musicService.findName(music_name);
    if (MusicName == null) {
      // show error message
      throw new NotFoundException('Not Found Date!');
    }
    return MusicName;
  }

  @Patch('/:id') // localhost:3000/music/:id
  async update(
    @Param('id') id: number,
    @Body() updateMusicDto: UpdateMusicDto,
  ) {
    const [updateMusic] = await this.musicService.update(+id, updateMusicDto);
    console.log(updateMusic);
    if (updateMusic === 0) {
      throw new NotFoundException('Not Found Date to Update!');
    }
    return { message: 'Update Data Complete' };
  }

  @UseGuards(JwtAuthGuard) // check token
  @Delete('/:id') // localhost:3000/music/:id
  async remove(@Param('id') id: number) {
    const destroyMusic = await this.musicService.remove(+id);
    console.log(destroyMusic);
    if (destroyMusic == 0) {
      throw new NotFoundException('Not Found Data to Remove!');
    }
    return { message: 'Remove Data Complete' };
  }
}
