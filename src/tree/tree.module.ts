/* eslint-disable prettier/prettier */
// Create Treemodule and register our Tree entity and TreeService

import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';

import { TreeController } from "src/trees/tree.controller";
import { Tree } from "./tree.entity";
import { TreeService } from "./tree.service";

@Module({
    imports: [TypeOrmModule.forFeature([Tree])],
    providers: [TreeService],
    controllers: [TreeController,]
})

export class TreeModule {}
