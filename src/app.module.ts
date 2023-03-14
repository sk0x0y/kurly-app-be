import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: (() => {
        const env = process.env.NODE_ENV;

        if (env === 'production') {
          return 'localhost';
        }

        return '49.247.41.209';
      })(),
      port: 3306,
      username: 'root',
      password: process.env.DB_PASSWORD,
      database: 'kurly',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
