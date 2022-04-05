import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreatStudentDto } from './dto/creat-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
    constructor( private readonly studentService: StudentService ){}
    @Get()
    listOfStudent(){
        return this.studentService.findAll();
    }
    @Get('/:id')
    findOneStudent(@Param('id') id){

        return this.studentService.findOne(parseInt(id))
    }
    @Post()
    insertNewStudent(@Body() body:CreatStudentDto){
        return this.studentService.create(body)
    }
    @Put(":id")
    updateStudentInformation(@Param('id') id, @Body() body:UpdateStudentDto){
        return this.studentService.update(+id,body)

    }
    @Delete(":id")
    delete(@Param('id') id){
        return this.studentService.delete(+id)

    }
}


