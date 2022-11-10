/* eslint-disable prettier/prettier */

// Controller: Decorator that marks a class as a Nest controller that can receive inbound requests and produce responses.

// An HTTP Controller responds to inbound HTTP Requests and produces HTTP Responses. It defines a class that provides the context for one or more related route handlers that correspond to HTTP request methods and associated routes for example GET /api/profile, POST /users/resume.

import { Controller, Get } from '@nestjs/common';

import { Tree } from 'src/tree/tree.entity';
import { TreeService } from './../tree/tree.service';


@Controller('trees')
export class TreeController {
  constructor(private readonly treeService: TreeService) {}

    // Get: Route handler (method) Decorator. Routes HTTP GET requests to the specified path.
    
  @Get()
  getTrees(): Promise<Tree[]> {
    return this.treeService.findAll();
  }
}

