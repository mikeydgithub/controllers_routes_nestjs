import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import TypeOrmModule
import { TypeOrmModule } from '@nestjs/typeorm';
import { TreeModule } from './tree/tree.module';

@Module({
  imports: [
    // create TypeOrmModule.forRoot objects in imports array
    // type, host, port, username, password, database, enetites, and
    // synchronize
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'xxxx',
      database: 'fruit-tree',
      entities: [],
      synchronize: true,
    }),
    TreeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
