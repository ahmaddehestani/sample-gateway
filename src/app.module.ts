import { Module } from '@nestjs/common';
import { StudentController } from './student/student.controller';
import { StudentService } from './student/student.service';
import { StudentModule } from './student/student.module';


@Module({
  imports: [StudentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
