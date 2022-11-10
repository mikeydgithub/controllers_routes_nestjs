/* eslint-disable prettier/prettier */
// We will inject our treeReposity in our TreeServive to perform operations on the entity.

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateTreeDTO } from 'src/trees/dto/create-tree.dto';
import { TreeFilterOptions } from './interfaces/filters'
import { Tree } from './tree.entity';

// Injectable: Decorator that marks a class as a provider. Providers can be injected into other classes via constructor parameter injection using Nest's built-in Dependency Injection (DI) system.
@Injectable()

// define TreeService
export class TreeService {
    // construct
    constructor(
        @InjectRepository(Tree)
        private treeRepository: Repository<Tree>,
    ) {}

    findAll(filters: TreeFilterOptions): Promise <Tree[]> {
        return this.treeRepository.find({
            where: {
                isEndangered: filters.isEndangered,
            },
        });
    }

    findOne(id: number): Promise<Tree> {
        return this.treeRepository.findOneBy({ id });
    }

    create(payload: CreateTreeDTO): Promise<Tree> {
        return this.treeRepository.save(payload);
    }
    
    async deleteById(id: number): Promise<void> {
        await this.treeRepository.delete(id);
    }
}
