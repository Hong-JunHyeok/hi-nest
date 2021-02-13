import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return All movies';
  }

  @Get('search')
  search(@Query('year') year: string) {
    return `We are searching a movie year=${year}`;
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `This will return One moive the id is ${id}`;
  }

  @Post()
  createMovie(@Body() movieData) {
    return movieData;
  }

  @Delete('/:id')
  deleteMovie(@Param('id') id: string) {
    return `This will delete movie ${id}`;
  }

  @Patch('/:id')
  patchMovie(@Param('id') id: string, @Body() movieData) {
    return {
      ...movieData,
      updateMovie: id,
    };
  }
}
