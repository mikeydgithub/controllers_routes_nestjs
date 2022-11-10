/* eslint-disable prettier/prettier */

// Controller: Decorator that marks a class as a Nest controller that can receive inbound requests and produce responses.

// An HTTP Controller responds to inbound HTTP Requests and produces HTTP Responses. It defines a class that provides the context for one or more related route handlers that correspond to HTTP request methods and associated routes for example GET /api/profile, POST /users/resume.

// Param: Route handler parameter decorator. Extracts the params property from the req object and populates the decorated parameter with the value of params. May also apply pipes to the bound parameter.


import { Controller, Get, Param, Post, Body, Query } from '@nestjs/common';

import { Tree } from 'src/tree/tree.entity';
import { TreeService } from './../tree/tree.service';
import { CreateTreeDTO } from './dto/create-tree.dto';


@Controller('trees')
export class TreeController {
  constructor(private readonly treeService: TreeService) {}

    // Get: Route handler (method) Decorator. Routes HTTP GET requests to the specified path.

    @Get()
    getTrees(@Query() query: { isEndangered?: boolean }): Promise<Tree[]> {
      return this.treeService.findAll({ isEndangered: query.isEndangered });
    }

  // id parameter gets passed inside our handler controller method
  @Get('/:id')
  // pass in @Param() decorater as a parameter for our method
  getSingleTree(@Param() params: { id: number }): Promise<Tree> {
    return this.treeService.findOne(params.id);
  }

  @Post()
  createTree(@Body() body: CreateTreeDTO): Promise<Tree> {
    return this.treeService.create(body);
  }
}

