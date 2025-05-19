import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: `mongodb+srv://${configService.get('DB_USER')}:${configService.get('DB_PASSWORD')}@cluster0.pxdhv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
      }),
    }),
  ],
})
export class DatabaseModule {}
