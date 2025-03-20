import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
// import { CreateCatDto } from './CreateCatDto';
import { CatsService } from './cats.service';
import { Cat } from './entity/cats.entity';
// import { Cat } from './interface/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {} // Inject the CatsService

  @Get()
  findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Cat | null> {
    return this.catsService.findOne(id);
  }

  @Post()
  create(@Body() cat: Cat) {
    return this.catsService.create(cat);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    this.catsService.remove(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() cat: Cat) {
    this.catsService.update(id, cat);
    return `This action updates a #${id} cat`;
  }

  // @Get()
  // findAll(): Cat[] {
  //   return this.catsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string): string {
  //   return `This action returns a #${id} cat`;
  // }

  // @Post()
  // create(@Body() creatrCatDto: CreateCatDto) {
  //   return this.catsService.create(creatrCatDto);
  // }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() createCatDto: CreateCatDto) {
  //   return `This action updates a #${id} cat`;
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return `This action removes a #${id} cat`;
  // }
}
