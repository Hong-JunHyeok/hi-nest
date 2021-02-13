import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return All movies';
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `This will return One moive the id is ${id}`;
  }

  @Post()
  createMovie() {
    return `This will create movie `;
  }

  @Delete('/:id')
  deleteMovie(@Param('id') id: string) {
    return `This will delete movie ${id}`;
  }

  @Patch('/:id')
  patchMovie(@Param('id') id: string) {
    return `This will patch movie ${id}`;
  }
}
