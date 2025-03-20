import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './entity/cats.entity';
import { getConnection, Repository } from 'typeorm';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>,
  ) {}

  findAll(): Promise<Cat[]> {
    return this.catsRepository.find();
  }

  findOne(id: number): Promise<Cat | null> {
    return this.catsRepository.findOne({ where: { id } });
  }

  async create(cat: Cat): Promise<void> {
    await this.catsRepository.save(cat);
  }

  async update(id: number, cat: Cat): Promise<void> {
    const existedCat = await this.findOne(id);
    if (existedCat) {
      await this.catsRepository.update(id, {
        name: cat.name,
        age: cat.age,
        breed: cat.breed,
      });
    }
  }
  // /**
  //  * 고양이 ID로 레코드를 삭제합니다.
  //  *
  //  * @param id - 삭제할 고양이의 고유 식별자입니다.
  //  * @returns 작업이 완료되면 void를 반환하는 Promise입니다.
  //  *
  //  * @async
  //  * 이 메서드는 비동기적으로 실행되며 Promise를 반환합니다. 삭제 작업이 완료될 때까지
  //  * 비차단(non-blocking) 방식으로 실행됩니다.
  //  */
  async remove(id: number): Promise<void> {
    // 고양이 ID로 레코드를 삭제합니다.
    await this.catsRepository.delete(id); // 삭제 작업이 완료될 때까지 비동기적으로 실행됩니다.
  }

  // create(cat: Cat) {
  //   this.cats.push(cat);
  // }

  // findAll(): Cat[] {
  //   return this.cats;
  // }
}
