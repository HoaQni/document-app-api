import { Module } from '@nestjs/common';
import { MongooseConfigModule } from './mongoose-config/mongoose-config.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { DocumentModule } from './document/document.module';
import { InvoiceHistoryModule } from './invoice-history/invoice-history.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CategoryModule } from './category/category.module';
import { CollectionModule } from './collection/collection.module';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseConfigModule,
    UserModule,
    AuthModule,
    DocumentModule,
    InvoiceHistoryModule,
    DashboardModule,
    CategoryModule,
    CollectionModule,
    ReviewModule,
  ],
})
export class AppModule {}
